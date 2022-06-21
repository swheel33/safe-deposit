import { Button, VStack, Flex } from "@chakra-ui/react";
import { Formik, Form } from 'formik'
import { InputControl } from 'formik-chakra-ui';
import { useEffect, useState } from "react";
import { useContract, useProvider } from "wagmi";
import * as Yup from 'yup'
import BackButton from "./BackButton";



export default function ExistingContractForm({depositFactoryAddress, depositFactoryABI,
     setNewContractAddress, setIsNewContract, setIsExistingContract}) {
    const [prevAddresses, setPrevAddresses] = useState([]);
    const [loading, setLoading] = useState(false);

    const provider = useProvider();
    const depositFactoryContract = useContract({
        addressOrName: depositFactoryAddress,
        contractInterface: depositFactoryABI,
        signerOrProvider: provider,
    })
    
    const allPrevContracts = async () => {
        setLoading(true);
        const filter = depositFactoryContract.filters.DepositCreated();
        const events = await depositFactoryContract.queryFilter(filter);
        const addresses = events.map(event => event.args[0])
        setPrevAddresses(addresses);
        setLoading(false);
    }

    //Render all previous contract addresses on mount
    useEffect(() => {
        allPrevContracts();
    },[])

    return (
     <Flex>
        <BackButton setIsExistingContract={setIsExistingContract} setIsNewContract={setIsNewContract}/>
        <Formik
            initialValues={{address: ''}}
            validationSchema={Yup.object({
                address: Yup.string()
                    .required('Required unless creating a new Deposit contract')
                    .oneOf(prevAddresses, `Please enter a valid Deposit contract address. If you don't have one you can
                    create a Deposit contract with the Create Deposit button`)
                })}
                onSubmit={(values,actions) => {
                    setNewContractAddress(values.address)
                    actions.resetForm();
                }}
            >
            {formik =>  (
                <Form onSubmit={formik.handleSubmit}>
                    <VStack>
                        <InputControl name='address' label='Contract Address'/>
                        <Button isDisabled={loading} type='submit'>Submit</Button> 
                    </VStack>
                </Form> 
            )}
        </Formik>
     </Flex>
     
     
            
        
    )
}