package com.example.marko.testethereum;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tuples.generated.Tuple3;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 3.4.0.
 */
public class Escrow_sol_Escrow extends Contract {
    private static final String BINARY = "608060405234801561001057600080fd5b506040516040806102bb83398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560018054939092169216919091179055610254806100676000396000f3006080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461007c57806312065fe0146100ba578063370158ea146100e15780633ccfd60b1461012d5780638da5cb5b14610144578063b6b55f2514610159575b600080fd5b34801561008857600080fd5b50610091610164565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100c657600080fd5b506100cf610180565b60408051918252519081900360200190f35b3480156100ed57600080fd5b506100f6610185565b6040805173ffffffffffffffffffffffffffffffffffffffff94851681529290931660208301528183015290519081900360600190f35b34801561013957600080fd5b506101426101ac565b005b34801561015057600080fd5b50610091610200565b61014260043561021c565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b303190565b60005460015473ffffffffffffffffffffffffffffffffffffffff91821691163031909192565b60015473ffffffffffffffffffffffffffffffffffffffff1633146101d057600080fd5b6040513390303180156108fc02916000818181858888f193505050501580156101fd573d6000803e3d6000fd5b50565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b3481146101fd57600080fd00a165627a7a7230582040393cd7d2401f7d01f7f0cf7ead303a2444178ae852f545a3d6603e8255df690029";

    public static final String FUNC_CREATOR = "creator";

    public static final String FUNC_GETBALANCE = "getBalance";

    public static final String FUNC_INFO = "info";

    public static final String FUNC_WITHDRAW = "withdraw";

    public static final String FUNC_OWNER = "owner";

    public static final String FUNC_DEPOSIT = "deposit";

    protected Escrow_sol_Escrow(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected Escrow_sol_Escrow(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public RemoteCall<String> creator() {
        final Function function = new Function(FUNC_CREATOR, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteCall<BigInteger> getBalance() {
        final Function function = new Function(FUNC_GETBALANCE, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}));
        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
    }

    public RemoteCall<Tuple3<String, String, BigInteger>> info() {
        final Function function = new Function(FUNC_INFO, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {}, new TypeReference<Address>() {}, new TypeReference<Uint256>() {}));
        return new RemoteCall<Tuple3<String, String, BigInteger>>(
                new Callable<Tuple3<String, String, BigInteger>>() {
                    @Override
                    public Tuple3<String, String, BigInteger> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple3<String, String, BigInteger>(
                                (String) results.get(0).getValue(), 
                                (String) results.get(1).getValue(), 
                                (BigInteger) results.get(2).getValue());
                    }
                });
    }

    public RemoteCall<TransactionReceipt> withdraw() {
        final Function function = new Function(
                FUNC_WITHDRAW, 
                Arrays.<Type>asList(), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<String> owner() {
        final Function function = new Function(FUNC_OWNER, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteCall<TransactionReceipt> deposit(BigInteger amount, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_DEPOSIT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(amount)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    /*public static RemoteCall<Escrow_sol_Escrow> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit, String _creator) {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(_creator), 
                new org.web3j.abi.datatypes.Address(_owner)));
        return deployRemoteCall(Escrow_sol_Escrow.class, web3j, credentials, gasPrice, gasLimit, BINARY, encodedConstructor);
    }*/

    public static RemoteCall<Escrow_sol_Escrow> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit, String _creator, String _owner) {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(_creator), 
                new org.web3j.abi.datatypes.Address(_owner)));
        return deployRemoteCall(Escrow_sol_Escrow.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, encodedConstructor);
    }

    public static Escrow_sol_Escrow load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new Escrow_sol_Escrow(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    public static Escrow_sol_Escrow load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new Escrow_sol_Escrow(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }
}
