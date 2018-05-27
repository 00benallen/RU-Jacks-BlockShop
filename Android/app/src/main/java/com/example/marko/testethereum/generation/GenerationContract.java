package com.example.marko.testethereum.generation;


import com.example.marko.testethereum.BasePresenter;
import com.example.marko.testethereum.BaseView;

/**
 * Created by eirlis on 29.06.17.
 */

public interface GenerationContract {

    interface View extends BaseView<Presenter> {

        void showGeneratedWallet(String walletAddress);
    }

    interface Presenter extends BasePresenter {

        void generateWallet(String password);
    }
}
