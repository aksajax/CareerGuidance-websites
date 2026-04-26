import { Flex, Container, Heading, Stack, Text, Button, Box, Image } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }

    // Neon Green Color Constant
    const neonGreen = "#a3ff12";

    return (
        <>
            <Helmet>
                <title>Resume Builder - Create Your Identity</title>
                <meta name="description" content="Build your professional resume in minutes." />
            </Helmet>

            {/* Main Background Setup */}
            <Box bg="#050505" minH="100vh" color="white" position="relative" overflow="hidden">
                
                {/* Background Glow Effect (Peche wala light effect) */}
                <Box 
                    position="absolute" 
                    top="20%" 
                    right="-10%" 
                    w="500px" 
                    h="500px" 
                    bg={neonGreen} 
                    opacity="0.15" 
                    filter="blur(120px)" 
                    rounded="full"
                    zIndex={0}
                />

                <Container 
                    maxW={'7xl'}
                    py={{ base: 10, md: 24 }} 
                    display={'flex'} 
                    flexDirection={{ base: 'column', md: 'row' }} 
                    alignItems={'center'} 
                    justifyContent={'space-between'}
                    position="relative"
                    zIndex={1}
                >
                    <Stack
                        width={{ base: '100%', md: '55%' }}
                        textAlign={{ base: 'center', md: 'start' }}
                        align={{ base: 'center', md: 'start' }}
                        spacing={8}
                    >
                        {selectBtn ? (
                            <>
                                <Box>
                                    <Text 
                                        color={neonGreen} 
                                        fontSize="xs" 
                                        fontWeight="bold" 
                                        textTransform="uppercase" 
                                        letterSpacing="0.2em"
                                        mb={4}
                                        border={`1px solid ${neonGreen}40`}
                                        display="inline-block"
                                        px={3} py={1} rounded="full"
                                    >
                                        Professional Identity Architect
                                    </Text>
                                    <Heading
                                        fontWeight={900}
                                        fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }}
                                        lineHeight={'110%'}
                                        letterSpacing="-0.04em"
                                    >
                                        YOUR RESUME IN <br />
                                        <Text as={'span'} color={neonGreen}>
                                            THREE EASY 
                                        </Text> STEPS.
                                    </Heading>
                                </Box>

                                <Text color={'gray.400'} maxW={'xl'} fontSize="lg" lineHeight="tall">
                                    Static templates se kaam nahi chalega. Hamare <Text as="span" color="white" fontWeight="bold">AI-driven tools</Text> se professional resume banayein jo recruiters ko impress kare.
                                </Text>

                                <Stack spacing={5} w={'full'} align={{ base: 'center', md: 'start' }}>
                                    {[
                                        "Select a neural template from our gallery.",
                                        "Build using our identity engine.",
                                        "Download your ATS-ready PDF."
                                    ].map((step, i) => (
                                        <Box key={i} display="flex" alignItems="center" gap={4}>
                                            <Flex align="center" justify="center" bg={`${neonGreen}20`} border={`1px solid ${neonGreen}40`} color={neonGreen} w="10" h="10" rounded="xl" fontWeight="black">
                                                {i + 1}
                                            </Flex>
                                            <Text color={'gray.300'} fontSize={'md'} fontWeight="medium">{step}</Text>
                                        </Box>
                                    ))}
                                </Stack>
                            </>
                        ) : (
                            <Heading
                                fontWeight={400}
                                fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                                lineHeight={'110%'}
                                letterSpacing="-0.04em"
                            >
                                SELECT A <br />
                                <Text as={'span'} color={neonGreen}>TEMPLATE</Text> <br />
                                FROM THE LIST.
                            </Heading>
                        )}
                    </Stack>

                    {/* Right Side Content */}
                    <Box mt={{ base: 12, md: 0 }} position="relative">
                        {selectBtn ? (
                            <Stack align="center" spacing={10}>
                                <Image 
                                    src={homeLogo} 
                                    alt='home logo' 
                                    maxW={{ base: "300px", md: "450px" }}
                                    filter={`drop-shadow(0 0 30px ${neonGreen}30)`}
                                    transition="all 0.5s ease"
                                    _hover={{ transform: "scale(1.02)" }}
                                />
                                <Button
                                    onClick={handleSelectTemplate}
                                    rounded={'full'}
                                    bg={neonGreen}
                                    color={'black'}
                                    size="lg"
                                    px={10}
                                    py={8}
                                    fontSize="md"
                                    fontWeight="bold"
                                    _hover={{ 
                                        bg: 'white',
                                        shadow: `0 0 40px ${neonGreen}60`,
                                        transform: 'translateY(-3px)'
                                    }}
                                    transition="all 0.3s"
                                >
                                    START ARCHITECTING
                                </Button>
                            </Stack>
                        ) : (
                            <Box 
                                maxH="600px" 
                                overflowY="auto" 
                                pr={4}
                                sx={{
                                    '&::-webkit-scrollbar': { width: '4px' },
                                    '&::-webkit-scrollbar-thumb': { bg: neonGreen, borderRadius: 'full' },
                                }}
                                display="grid"
                                gridTemplateColumns="repeat(2, 1fr)"
                                gap={6}
                            >
                                {ThemeTemplateData.map((item, index) => (
                                    <Box 
                                        key={index} 
                                        onClick={showTheme}
                                        cursor="pointer"
                                        transition="all 0.4s"
                                        border="1px solid"
                                        borderColor="whiteAlpha.100"
                                        rounded="2xl"
                                        overflow="hidden"
                                        _hover={{ 
                                            borderColor: neonGreen,
                                            transform: "translateY(-10px)",
                                            shadow: `0 10px 30px ${neonGreen}20`
                                        }}
                                    >
                                        <Image id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Container>
            </Box>
        </>
    );
}