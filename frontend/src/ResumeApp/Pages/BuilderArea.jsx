import React, { useContext } from 'react'
import { Button, Box, Flex } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';

import ResumeContext from '../Context/ResumeContext.jsx';
import PropagateLoader from "react-spinners/PropagateLoader";
// 1. Library import karein
import html2pdf from 'html2pdf.js';

const BuilderArea = () => {
    const { showComponent, setShowComponent, loading } = useContext(ResumeContext);

    // --- Direct Download Logic ---
    const handleDownloadPDF = () => {
        const element = document.getElementById('resume-preview-area');
        
        if (!element) {
            alert("Resume preview not found!");
            return;
        }

        // 2. PDF Options setup karein
        const options = {
            margin: 0,
            filename: 'My_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true, 
                letterRendering: true 
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // 3. Generate and Download
        html2pdf().set(options).from(element).save();
    }

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }

    const neonGreen = "#a3ff12";
    const darkBg = "#050505";

    return (
        <Box bg={darkBg} minH="100vh">
            {loading && (
                <Flex position="fixed" top={0} left={0} w="100%" h="100%" bg="blackAlpha.800" zIndex={9999} align="center" justify="center">
                    <PropagateLoader color={neonGreen} size={25} />
                </Flex>
            )}

            <Box pt="20px">
                <UserDataCollect />
            </Box>

            <Flex justify="center" gap={4} py={10}>
                <Button 
                    bg={neonGreen} 
                    color="black"
                    size="lg"
                    px={10}
                    fontWeight="bold"
                    _hover={{ shadow: `0 0 25px ${neonGreen}` }}
                    onClick={handleDownloadPDF} // Click par direct download
                >
                    Download PDF
                </Button>

                <Button 
                    variant='outline' 
                    borderColor="whiteAlpha.400" 
                    color="white"
                    size="lg"
                    onClick={handleSelectNewTemplate}
                >
                    Change Template
                </Button>
            </Flex>

            
        </Box>
    )
}

export default BuilderArea;