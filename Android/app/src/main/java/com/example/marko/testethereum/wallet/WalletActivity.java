package com.example.marko.testethereum.wallet;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;

import com.example.marko.testethereum.Escrow_sol_Escrow;
import com.example.marko.testethereum.R;

import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.Web3jFactory;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.Transaction;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.Contract;
import org.web3j.tx.ManagedTransaction;
import org.web3j.tx.RawTransactionManager;
import org.web3j.tx.TransactionManager;

import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

/**
 * Created by eirlis on 29.06.17.
 */

public class WalletActivity extends AppCompatActivity {

    public static final String TAG = WalletActivity.class.getName();

    private TextView mWalletAddress;

    private BigInteger balance;
    private TextView mBalance;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wallet);
        mWalletAddress = (TextView) findViewById(R.id.account_address);

        Bundle extras = getIntent().getExtras();
        mWalletAddress.setText(extras.getString("WalletAddress"));
        //BigInteger walletnum = new BigInteger(mWalletAddress.toString(),16);
        Web3j web3j = Web3jFactory.build(new HttpService("http://52.15.171.126:8545"));
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

            TransactionManager tm = new RawTransactionManager(web3j,credentials);
            // last variable is person who will have withdraw rights on the escrow account
            Future<Escrow_sol_Escrow > contract = Escrow_sol_Escrow.deploy(
                    web3j, tm,
                    ManagedTransaction.GAS_PRICE, Contract.GAS_LIMIT, extras.getString("WalletAddress"),"0xdcefa5f63447bc89a587dde1770b0512ee9ca2c9").sendAsync();
            Escrow_sol_Escrow nc = contract.get();
            Future<BigInteger> Fbalance = nc.getBalance().sendAsync();
            BigInteger balance = Fbalance.get();

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
            };


            Log.v("Balance: ",""+balance);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
