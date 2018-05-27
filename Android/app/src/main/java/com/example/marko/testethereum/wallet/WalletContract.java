package com.example.marko.testethereum.wallet;

import com.example.marko.testethereum.BasePresenter;
import com.example.marko.testethereum.BaseView;

/**
 * Created by eirlis on 29.06.17.
 */

public class WalletContract {

    interface View extends BaseView<WalletContract.Presenter> {

        void showBalance();

        void showWalletAddress();
    }

    interface Presenter extends BasePresenter {

        void getWalletBalance();

        void getWalletAddress();
    }
}
