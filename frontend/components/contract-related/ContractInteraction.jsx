import Approve from './Approve';
import Deposit from './Deposit';
import Contest from './Contest';
import Claim from './Claim';
import { Box } from '@chakra-ui/react';

export default function ContractInteraction({didApprove, didDeposit, didClaim, didContest, setDidApprove,
     setDidDeposit, setDidContest, setDidClaim, tokenContract, depositContract, depositContractAddress, accounts,
      buyer, seller, claimEligible, contestEligible, depositAmount}) {
    return (
       <Box>
            {(!didApprove && !didDeposit) && <Approve 
                tokenContract={tokenContract} 
                depositContractAddress={depositContractAddress} 
                depositAmount={depositAmount} 
                setDidApprove={setDidApprove}
                />}
            {(didApprove && !didDeposit) && <Deposit depositContract={depositContract} setDidDeposit={setDidDeposit}/>}
            {(contestEligible && !didContest && (accounts[0] == buyer)) && <Contest depositContract={depositContract} setDidContest={setDidContest}/>}
            {(claimEligible && !didClaim && (accounts[0] == seller)) && <Claim depositContract={depositContract} setDidClaim={setDidClaim}/>}
       </Box>
        
    )
}