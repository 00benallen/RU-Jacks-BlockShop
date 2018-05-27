package com.example.marko.testethereum.generation;

import android.os.Environment;
import android.util.Log;

import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.ECKeyPair;
import org.web3j.crypto.MnemonicUtils;
import org.web3j.crypto.WalletUtils;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;

/**
 * Created by eirlis on 29.06.17.
 */

public class GenerationPresenter implements GenerationContract.Presenter {

    private final GenerationContract.View mWalletGenerationView;

    private String mPassword;
    static String pathtowall;
    public GenerationPresenter(GenerationContract.View walletGenerationView, String password) {
        mWalletGenerationView = walletGenerationView;
        mPassword = password;
    }

    @Override
    public void generateWallet(final String password) {
        String fileName;

        try {
            File path = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
            if (!path.exists()) {
                path.mkdir();
            }
            byte[] sed = MnemonicUtils.generateSeed("lounge episode medal arctic dilemma siren keep myself year achieve major close",password);
            ECKeyPair keypair = ECKeyPair.create(new BigInteger("2cac5ffa846d91a5b3aa4d83e6b32a1c67ba758657a04e558d47b49710da5533",16));
            //fileName = WalletUtils.generateLightNewWalletFile(password, new File(String.valueOf(path)));
            fileName = WalletUtils.generateWalletFile(password, keypair, new File(String.valueOf(path)), false);
            Log.e("TAG", "generateWallet: " + path+ "/" + fileName);
            Credentials credentials =
                    WalletUtils.loadCredentials(
                            password,
                            path + "/" + fileName);
            pathtowall=path + "/" + fileName;
            mWalletGenerationView.showGeneratedWallet(credentials.getAddress());
            Log.e("TAG", "generateWallet: " + credentials.getAddress() + " " + credentials.getEcKeyPair().getPublicKey()+" "+ credentials.getEcKeyPair().getPrivateKey());
        } catch ( IOException
                | CipherException e) {
            e.printStackTrace();
        }
    }

    //@Override
    public void start() {
        generateWallet(mPassword);
    }
}
