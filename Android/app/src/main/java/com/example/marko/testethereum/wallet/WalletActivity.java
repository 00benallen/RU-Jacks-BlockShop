package com.example.marko.testethereum.wallet;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;

import com.example.marko.testethereum.Escrow_sol_Escrow;
import com.example.marko.testethereum.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.Web3jFactory;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.core.methods.response.Transaction;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.Contract;
import org.web3j.tx.ManagedTransaction;
import org.web3j.tx.RawTransactionManager;
import org.web3j.tx.TransactionManager;
import org.web3j.utils.Convert;
import org.web3j.utils.Numeric;

import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Created by eirlis on 29.06.17.
 */

public class WalletActivity extends AppCompatActivity {

    public static final String TAG = WalletActivity.class.getName();

    private TextView mWalletAddress;

    private BigInteger balance;
    private TextView mBalance;
    JSONObject stuffs;
    public Web3j web3j;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wallet);
        mWalletAddress = (TextView) findViewById(R.id.account_address);

        final Bundle extras = getIntent().getExtras();
        mWalletAddress.setText(extras.getString("WalletAddress"));

        //BigInteger walletnum = new BigInteger(mWalletAddress.toString(),16);
        web3j = Web3jFactory.build(new HttpService("http://52.15.171.126:8545"));
        try {
            EthGetBalance ethGetBalance = web3j
                    .ethGetBalance(extras.getString("WalletAddress"), DefaultBlockParameterName.LATEST)
                    .sendAsync()
                    .get();
            balance = ethGetBalance.getBalance();
            mBalance = (TextView) findViewById(R.id.wallet_balance);
            mBalance.setText(balance.toString());


            Credentials credentials =
                    WalletUtils.loadCredentials(
                            getIntent().getStringExtra("password"),
                            getIntent().getStringExtra("pathtowallet"));


            /*TransactionManager tm = new RawTransactionManager(web3j,credentials);
            // last variable is person who will have withdraw rights on the escrow account
            Future<Escrow_sol_Escrow > contract = Escrow_sol_Escrow.deploy(
                    web3j, tm,
                    ManagedTransaction.GAS_PRICE, Contract.GAS_LIMIT, extras.getString("WalletAddress"),"0x053d8d238212d3026e1b678494c2694fb4357508").sendAsync();
            Escrow_sol_Escrow nc = contract.get();
            Future<BigInteger> Fbalance = nc.getBalance().sendAsync();
            final BigInteger balance = Fbalance.get();

            final Future<TransactionReceipt> dReciept = nc.deposit(new BigInteger("10"), new BigInteger("100")).sendAsync();
            final Runnable r = new Runnable() {
                public void run() {
                    try {

                        TransactionReceipt reciept = dReciept.get();


                        for(org.web3j.protocol.core.methods.response.Log log: reciept.getLogs()){
                            Log.d("test",""+log.toString());
                        }




                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    } catch (ExecutionException e) {
                        e.printStackTrace();
                    }
                }
            };*/
            final OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                    .get()
                    .url("http://rujacksvendorservice-env.wnv9mmfbvj.us-east-1.elasticbeanstalk.com/shop/BlockShopExample/products/TestProduct")
                    .build();
            client.newCall(request).enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    Log.d("err", "second call");
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    String lel = response.body().string();
                    Log.d("firstres",lel);
                    try {
                        stuffs = new JSONObject(lel);
                        stuffs.put("stock",stuffs.getInt("stock")-1);
                        MediaType JSON = MediaType.parse("application/json; charset=utf-8");
                        RequestBody body = RequestBody.create(JSON, stuffs.toString());


                        Request request = new Request.Builder()
                                .url("http://rujacksvendorservice-env.wnv9mmfbvj.us-east-1.elasticbeanstalk.com/shop/BlockShopExample/products/TestProduct")
                                .put(body) //PUT
                                .build();
                        client.newCall(request).enqueue(new Callback() {
                            @Override
                            public void onFailure(Call call, IOException e) {
                                Log.d("err", "second call");
                            }

                            @Override
                            public void onResponse(Call call, Response response) throws IOException {
                                Log.d("request",response.body().string());
                            }
                        });
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });

            Log.v("Balance: ",""+balance);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
    public void transfer (String from, String to, BigInteger amount) throws InterruptedException, ExecutionException, IOException, CipherException{
        Credentials credentials1 = WalletUtils.loadCredentials(
                getIntent().getStringExtra("password"),
                getIntent().getStringExtra("pathtowallet"));;

        EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(
                from, DefaultBlockParameterName.LATEST).sendAsync().get();

        BigInteger nonce = ethGetTransactionCount.getTransactionCount();
        System.out.println(nonce);

        RawTransaction rawTransaction = RawTransaction.createEtherTransaction (
                nonce, Convert.toWei("22", Convert.Unit.MWEI).toBigInteger(), Convert.toWei("44", Convert.Unit.GWEI).toBigInteger(), to, amount);
        byte[] signedMessage = TransactionEncoder.signMessage(rawTransaction, credentials1);
        String hexValue = Numeric.toHexString(signedMessage);

        EthSendTransaction ethSendTransaction = web3j.ethSendRawTransaction(hexValue).sendAsync().get();
        String transactionHash = ethSendTransaction.getTransactionHash();
    }
}
