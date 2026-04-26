import React, { useContext, useEffect, useState, forwardRef } from 'react'
import { IoMdCloudUpload } from 'react-icons/io'
import { Input, Heading, Textarea, Button, Box, Stack, Flex, Text } from '@chakra-ui/react'
import ResumeContext from '../../Context/ResumeContext'

// --- 1. ForwardRef ka use kiya taaki BuilderArea ka ref direct Preview Area se link ho sake ---
const UserDataCollect = forwardRef((props, ref) => {
    const { 
        themeData, checkAward, setCheckAward, 
        setThemeData, checkProj, checkWork, 
        setCheckProj, setCheckWork 
    } = useContext(ResumeContext)

    // --- Modern Theme Constants ---
    const neonGreen = "#a3ff12";
    const darkBg = "#050505";
    const cardBg = "rgba(255, 255, 255, 0.03)";
    const glassBorder = "1px solid rgba(255, 255, 255, 0.1)";

    // --- States ---
    const [projectCount, setProjectCount] = useState(1)
    const [educationCount, setEducationCount] = useState(1)
    const [workCount, setWorkCount] = useState(1)

    const [projIds, setProjIds] = useState([1])
    const [eduIds, setEduIds] = useState([1])
    const [workIds, setWorkIds] = useState([1])

    const [projectData, setProjectData] = useState({ projectTitles: { pTitle1: "" }, projectDesc: { pDescription1: "" } })
    const [educationData, setEducationData] = useState({ educationTitles: { eTitle1: "" }, educationDesc: { eDescription1: "" } })
    const [workData, setWorkData] = useState({ workTitles: { wTitle1: "" }, workDesc: { wDescription1: "" } })
    const [personalData, setPersonalData] = useState({ 
        profileImage: 'https://www.w3schools.com/howto/img_avatar.png', 
        name: "", summary: '', profile: "", 
        address: "", phone: "", email: "", skill: '', 
    })
    const [awardData, setAwardData] = useState({ awards: '' })

    // --- Reusable Input Style ---
    const inputStyle = {
        bg: "rgba(255,255,255,0.05)",
        border: "1px solid",
        borderColor: "whiteAlpha.200",
        _focus: { borderColor: neonGreen, boxShadow: `0 0 10px ${neonGreen}40` },
        color: "white",
        mb: 4,
        rounded: "xl",
        fontSize: "sm"
    }

    // --- Handlers ---
    const handleChangePersonal = (e) => {
        const { name, value, files } = e.target
        if (name === 'profileImage' && files[0]) {
            setPersonalData(prev => ({ ...prev, profileImage: URL.createObjectURL(files[0]) }))
        } else {
            setPersonalData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        setProjectData(prev => ({
            ...prev,
            projectTitles: name === 'pName' ? { ...prev.projectTitles, [id]: value } : prev.projectTitles,
            projectDesc: name === 'pDescription' ? { ...prev.projectDesc, [id]: value } : prev.projectDesc
        }))
    }

    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        setEducationData(prev => ({
            ...prev,
            educationTitles: name === 'eName' ? { ...prev.educationTitles, [id]: value } : prev.educationTitles,
            educationDesc: name === 'eDescription' ? { ...prev.educationDesc, [id]: value } : prev.educationDesc
        }))
    }

    const handleChangeWork = (e) => {
        const { name, value, id } = e.target
        setWorkData(prev => ({
            ...prev,
            workTitles: name === 'wName' ? { ...prev.workTitles, [id]: value } : prev.workTitles,
            workDesc: name === 'wDescription' ? { ...prev.workDesc, [id]: value } : prev.workDesc
        }))
    }

    useEffect(() => {
        setThemeData(prev => ({ 
            ...prev, personalData, projectData, educationData, workData, awardData 
        }))
    }, [personalData, projectData, educationData, workData, awardData, setThemeData])

    return (
        <Flex direction={{ base: "column", md: "row" }} w="100%" pt="100px" gap={8} px={8} bg={darkBg} minH="100vh">
            
            {/* LEFT SIDE: FORM AREA */}
            <Box 
                flex="1.2" h="85vh" overflowY="auto" p={8} bg={cardBg} 
                border={glassBorder} backdropFilter="blur(10px)" borderRadius="3xl"
                sx={{
                    '&::-webkit-scrollbar': { width: '5px' },
                    '&::-webkit-scrollbar-thumb': { bg: 'whiteAlpha.300', borderRadius: 'full' },
                }}
            >
                <Stack gap={10}>
                    <Box>
                        <Heading size="md" color={neonGreen} mb={6} textTransform="uppercase" letterSpacing="widest">
                            Personal Details
                        </Heading>
                        <Flex align="center" gap={6} mb={6}>
                            <Box position="relative">
                                <img src={personalData.profileImage} alt="profile" style={{width: '90px', height: '90px', borderRadius: '24px', border: `2px solid ${neonGreen}`, objectFit: 'cover'}} />
                                <label htmlFor='input-file' style={{position: 'absolute', bottom: '-5px', right: '-5px', background: neonGreen, borderRadius: '50%', padding: '6px', cursor: 'pointer', color: 'black'}}>
                                    <IoMdCloudUpload size={18} />
                                </label>
                                <input name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' hidden />
                            </Box>
                            <Box flex="1">
                                <Input {...inputStyle} name='name' onChange={handleChangePersonal} placeholder='Your Full Name' />
                                <Input {...inputStyle} name='profile' onChange={handleChangePersonal} placeholder='Professional Title' />
                            </Box>
                        </Flex>
                        <Textarea {...inputStyle} name='summary' onChange={handleChangePersonal} placeholder='Professional Summary' h="100px" />
                        <Flex gap={4}>
                            <Input {...inputStyle} name='email' onChange={handleChangePersonal} placeholder='Email id' />
                            <Input {...inputStyle} name='phone' onChange={handleChangePersonal} placeholder='Phone number' />
                        </Flex>
                        <Input {...inputStyle} name='address' onChange={handleChangePersonal} placeholder='Address' />
                    </Box>

                    <Box>
                        <Heading size="sm" color="white" mb={4}>Technical Skills</Heading>
                        <Input {...inputStyle} name='skill' onChange={handleChangePersonal} placeholder='Separate skills by comma' />
                    </Box>

                    <Box>
                        <Flex justify="space-between" align="center" mb={4}>
                            <Heading size="sm" color="white">Education</Heading>
                            <Button size="xs" variant="outline" color={neonGreen} borderColor={neonGreen} onClick={() => {
                                const next = educationCount + 1;
                                setEduIds([...eduIds, next]);
                                setEducationCount(next);
                            }}>+ Add Education</Button>
                        </Flex>
                        {eduIds.map(id => (
                            <Box key={id} p={4} bg="whiteAlpha.50" rounded="2xl" mb={4} border="1px solid rgba(255,255,255,0.05)">
                                <Input {...inputStyle} id={`eTitle${id}`} name='eName' onChange={handleChangeEducation} placeholder='School/University Name' />
                                <Textarea {...inputStyle} id={`eDescription${id}`} name='eDescription' onChange={handleChangeEducation} placeholder='Degree / Year / Grade' mb={0} />
                            </Box>
                        ))}
                    </Box>

                    {/* Projects - Fixed isDisabled warning */}
                    <Box>
                        <Flex justify="space-between" align="center" mb={4}>
                            <Flex align="center" gap={3}>
                                <Heading size="sm" color="white">Projects</Heading>
                                <input type="checkbox" checked={!checkProj} onChange={() => setCheckProj(!checkProj)} style={{accentColor: neonGreen}} />
                            </Flex>
                            <Button size="xs" disabled={checkProj} variant="outline" color={neonGreen} borderColor={neonGreen} onClick={() => {
                                const next = projectCount + 1;
                                setProjIds([...projIds, next]);
                                setProjectCount(next);
                            }}>+ Add Project</Button>
                        </Flex>
                        {!checkProj && projIds.map(id => (
                            <Box key={id} p={4} bg="whiteAlpha.50" rounded="2xl" mb={4} border="1px solid rgba(255,255,255,0.05)">
                                <Input {...inputStyle} id={`pTitle${id}`} name='pName' onChange={handleChangeProject} placeholder='Project Title' />
                                <Textarea {...inputStyle} id={`pDescription${id}`} name='pDescription' onChange={handleChangeProject} placeholder='Project Description' mb={0} />
                            </Box>
                        ))}
                    </Box>

                    {/* Work - Fixed isDisabled warning */}
                    <Box>
                        <Flex justify="space-between" align="center" mb={4}>
                            <Flex align="center" gap={3}>
                                <Heading size="sm" color="white">Work Experience</Heading>
                                <input type="checkbox" checked={!checkWork} onChange={() => setCheckWork(!checkWork)} style={{accentColor: neonGreen}} />
                            </Flex>
                            <Button size="xs" disabled={checkWork} variant="outline" color={neonGreen} borderColor={neonGreen} onClick={() => {
                                const next = workCount + 1;
                                setWorkIds([...workIds, next]);
                                setWorkCount(next);
                            }}>+ Add Experience</Button>
                        </Flex>
                        {!checkWork && workIds.map(id => (
                            <Box key={id} p={4} bg="whiteAlpha.50" rounded="2xl" mb={4} border="1px solid rgba(255,255,255,0.05)">
                                <Input {...inputStyle} id={`wTitle${id}`} name='wName' onChange={handleChangeWork} placeholder='Job Title / Company' />
                                <Textarea {...inputStyle} id={`wDescription${id}`} name='wDescription' onChange={handleChangeWork} placeholder='Work Description' mb={0} />
                            </Box>
                        ))}
                    </Box>

                    <Box>
                        <Flex align="center" gap={3} mb={4}>
                            <Heading size="sm" color="white">Awards & Achievements</Heading>
                            <input type="checkbox" checked={!checkAward} onChange={() => setCheckAward(!checkAward)} style={{accentColor: neonGreen}} />
                        </Flex>
                        <Textarea {...inputStyle} name='awards' disabled={checkAward} onChange={(e) => setAwardData({ awards: e.target.value })} placeholder='Separate achievements by comma' />
                    </Box>
                </Stack>
            </Box>

            {/* --- 2. RIGHT SIDE: LIVE PREVIEW (Target for Print) --- */}
            <Box 
                flex="1" h="85vh" position="sticky" top="100px" 
                bg="#111" borderRadius="3xl" border={glassBorder} 
                overflow="hidden" boxShadow="0 20px 50px rgba(0,0,0,0.5)"
            >
                <Box bg="whiteAlpha.100" p={3} textAlign="center">
                    <Text fontSize="10px" fontWeight="black" letterSpacing="3px" color={neonGreen}>NEURAL PREVIEW ENGINE</Text>
                </Box>
                
                {/* 3. Yahan ref={ref} attach kiya hai jo BuilderArea se aa raha hai */}
                <Box ref={ref} p={10} overflowY="auto" h="calc(100% - 40px)" id="resume-preview-area" bg="white">
                    <Flex justify="space-between" align="flex-start" mb={10}>
                        <Box>
                            <Heading size="xl" color="black">{personalData.name || "YOUR NAME"}</Heading>
                            <Text color="#319795" fontWeight="bold" mt={1}>{personalData.profile || "PROFESSIONAL TITLE"}</Text>
                        </Box>
                        <img src={personalData.profileImage} alt="profile" style={{width: '70px', height: '70px', borderRadius: '10px', objectFit: 'cover'}} />
                    </Flex>

                    <Stack gap={6} color="black">
                        <Box borderBottom="1px solid" borderColor="gray.200" pb={4}>
                            <Text color="gray.800" fontSize="xs" fontWeight="black" mb={2}>CONTACT</Text>
                            <Text fontSize="xs">📧 {personalData.email || "email@example.com"}</Text>
                            <Text fontSize="xs">📞 {personalData.phone || "+91 XXXXXXXXXX"}</Text>
                            <Text fontSize="xs">📍 {personalData.address || "City, Country"}</Text>
                        </Box>

                        <Box>
                            <Text color="gray.800" fontSize="xs" fontWeight="black" mb={2}>SUMMARY</Text>
                            <Text fontSize="xs" lineHeight="relaxed">{personalData.summary || "Summary content..."}</Text>
                        </Box>

                        <Box>
                            <Text color="gray.800" fontSize="xs" fontWeight="black" mb={2}>SKILLS</Text>
                            <Flex wrap="wrap" gap={2}>
                                {(personalData.skill || "Skills").split(',').map((s, i) => (
                                    <Text key={i} px={2} py={1} bg="gray.100" rounded="md" fontSize="10px" color="black">{s.trim()}</Text>
                                ))}
                            </Flex>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Flex>
    )
})

export default UserDataCollect;