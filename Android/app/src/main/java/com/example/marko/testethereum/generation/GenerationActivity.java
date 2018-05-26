package com.example.marko.testethereum.generation;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Parcelable;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.example.marko.testethereum.R;
import com.example.marko.testethereum.wallet.WalletActivity;

public class GenerationActivity extends AppCompatActivity implements GenerationContract.View {

    public static final String TAG = GenerationActivity.class.getName();

    private static final int REQUEST_PERMISSION_WRITE_STORAGE = 0;

    private GenerationContract.Presenter mWalletPresenter;

    private Button mGenerateWalletButton;

    private String mWalletAddress;

    private EditText mPassword;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_generation);
        ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},100);

        mGenerateWalletButton = (Button) findViewById(R.id.generate_wallet_button);
        mPassword = (EditText) findViewById(R.id.password);

        mGenerateWalletButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int permissionCheck = ContextCompat.checkSelfPermission(GenerationActivity.this,
                        Manifest.permission.WRITE_EXTERNAL_STORAGE);
                Log.v("dick","yeeee "+permissionCheck);
                if (permissionCheck != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(GenerationActivity.this,new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},100);
                    Log.v("dick","yeeee "+permissionCheck);
                } else {
                    mWalletPresenter = new GenerationPresenter(GenerationActivity.this,
                            mPassword.getText().toString());
                    mWalletPresenter.generateWallet(mPassword.getText().toString());
                    Intent intent = new Intent(GenerationActivity.this, WalletActivity.class);
                    intent.putExtra("WalletAddress", mWalletAddress);
                    intent.putExtra("password", mPassword.getText().toString());
                    intent.putExtra("pathtowallet",GenerationPresenter.pathtowall);

                    startActivity(intent);
                }
            }
        });
    }

    @Override
    public void setPresenter(GenerationContract.Presenter presenter) {
        mWalletPresenter = presenter;
    }

    @Override
    public void showGeneratedWallet(String address) {
        mWalletAddress = address;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        switch (requestCode) {
            case REQUEST_PERMISSION_WRITE_STORAGE: {
                if (grantResults.length == 0 || grantResults[0] != PackageManager.PERMISSION_GRANTED) {
                    finish();
                } else {
                    mWalletPresenter.generateWallet(mPassword.getText().toString());
                }
                break;
            }
        }
    }
}
