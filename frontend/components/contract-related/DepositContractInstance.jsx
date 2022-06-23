import { Box, Title } from '@mantine/core';
import { useState, useEffect } from "react";
import ContractInfo from "./ContractInfo";
import TokenContractInstance from './TokenContractInstance';
import { useContractRead, useContract, useProvider } from "wagmi";


export default function DepositContractInstance({depositContractAddress, depositContractABI,
     newlyCreated, account }) {
    //State variable declaration to track progress
    
    const [didContest, setDidContest] = useState(false);
    const [didClaim, setDidClaim] = useState(false);
    const [contestEligible, setContestEligible] = useState(false);
    const [didDeposit, setDidDeposit] = useState(false);
    const [didApprove, setDidApprove] = useState(false);
    const [claimEligible, setClaimEligible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const provider = useProvider();

    //Deposit contract 
    const depositContract = useContract({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI,
        signerOrProvider: provider,
    })

    const getContestStatus = async () => {
        try {
            const filter = depositContract.filters.ContestComplete();
            const event = await depositContract.queryFilter(filter);
            if (event[0]) {
                setDidContest(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getClaimStatus = async () => {
        try {
            const filter = depositContract.filters.ClaimComplete();
            const event = await depositContract.queryFilter(filter);
            if (event[0]) {
                setDidClaim(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    //getting info from the smart contract
  
    const { data: agreedDate } = useContractRead({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI
    },
    'getAgreedDate',
    )

    const { data: depositAmount } = useContractRead({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI
    },
    'getDepositValue',
    )
    
    const { data: deadline } = useContractRead({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI
    },
    'getDeadline',
    )

    const { data: buyer } = useContractRead({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI
    },
    'getBuyer',
    )

    const { data: seller } = useContractRead({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI
    },
    'getSeller',
    )

    const { data: contractState } = useContractRead({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI
    },
    'getCurrentState',
    )

    const { data: tokenAddress } = useContractRead({
        addressOrName: depositContractAddress,
        contractInterface: depositContractABI,
    },
    'getTokenAddress'
    )

    const getContestEligibility = async () => {
        try {
            if (agreedDate) {
                const now = new Date();
                const agreedDateJS = new Date(agreedDate*1000);
                const deadlineJS = new Date(deadline*1000);
                setContestEligible(now > agreedDate && now < deadlineJS);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getClaimEligibility = async () => {
        try {
            if(!didContest && deadline) {
                const now = new Date();
                const deadlineJS = new Date(deadline*1000);
                setClaimEligible(now > deadline);
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getContestStatus();
    },[didContest])

    useEffect(() => {
        getClaimStatus();
    },[didClaim])


    /* Not only on mount cause it's possible that immediately after deposit you could contest if the agreed upon date isLoading today.
    The other edge case this accounts for isLoading a deposit after the 24 hours from the agreed date which isLoading techincally possible and then
    you can instantly claim. */
    useEffect(() => {
        getContestEligibility();
        getClaimEligibility();
    },[didDeposit, deadline])


    useEffect(() => {
        setIsLoading(!depositAmount || !deadline || !agreedDate || !contractState);
    },[depositAmount, deadline, agreedDate, contractState]) 
    
    return (
        <Box>
            {isLoading && <Title>Loading...</Title>}
            {!isLoading && 
                <Box>
                    <ContractInfo 
                        didContest={didContest} 
                        didClaim={didClaim}
                        contractState={contractState}
                        depositContractAddress={depositContractAddress}
                        depositAmount={depositAmount}
                        tokenAddress={tokenAddress}
                        agreedDate={agreedDate}
                        buyer={buyer}
                        seller={seller}
                        newlyCreated={newlyCreated}
                        />
                    <TokenContractInstance 
                        tokenAddress={tokenAddress}
                        setDidDeposit={setDidDeposit}
                        setDidApprove={setDidApprove}
                        didDeposit={didDeposit}
                        didApprove={didApprove}
                        depositContractAddress={depositContractAddress}
                        deadline={deadline}
                        depositAmount={depositAmount}
                        agreedDate={agreedDate}
                        newlyCreated={newlyCreated}
                        claimEligible={claimEligible}
                        contestEligible={contestEligible}
                        account={account}
                        provider={provider}
                        /> 
                </Box> }                 
        </Box>
    )
}