import React, { useContext, useEffect, useState } from 'react'
import './userCollectData.css'
import { IoMdCloudUpload } from 'react-icons/io'

import { Input, Heading, Textarea, Button, Box, Stack, Flex, Separator as Divider, Text } from '@chakra-ui/react'
import ResumeContext from '../../Context/ResumeContext'

const UserDataCollect = () => {
    const { 
        themeData, checkAward, setCheckAward, 
        setThemeData, checkProj, checkWork, 
        setCheckProj, setCheckWork 
    } = useContext(ResumeContext)

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
        name: "Your Name", summary: '', profile: "Work Profile", 
        address: "Address", phone: "", email: "", skill: '', 
    })
    const [awardData, setAwardData] = useState({ awards: '' })

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
        <Flex direction={{ base: "column", md: "row" }} w="100%" pt="100px" gap={6} px={5} bg="gray.50" minH="100vh">
            
            {/* LEFT SIDE: FORM AREA (Scrollable) */}
            <Box flex="1" h="85vh" overflowY="auto" p={6} bg="white" borderRadius="lg" boxShadow="md">
                <div id="form-collect">
                    {/* Personal Details Area */}
                    <div id="form-personal" className='mb-4'>
                        <Heading as='h4' size='lg' className='mb-2' color="teal.500">Personal Details</Heading>
                        <Divider mb={4} />
                        <Box className='my-2'>
                            <div className='file'>
                                <label htmlFor='input-file' style={{cursor: 'pointer', fontWeight: 'bold'}}>
                                    <IoMdCloudUpload size={30} /> Select Profile Picture
                                </label>
                                <input name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' hidden />
                                <img className="blah" src={personalData.profileImage} alt="profile" style={{width: '70px', height: '70px', borderRadius: '50%', marginTop: '10px'}} />
                            </div>
                        </Box>
                        <Input className='my-2' name='name' onChange={handleChangePersonal} placeholder='Your Name' />
                        <Input className='my-2' name='summary' onChange={handleChangePersonal} placeholder='Your Summary' />
                        <Input className='my-2' name='profile' onChange={handleChangePersonal} placeholder='Work Profile' />
                        <Input className='my-2' name='address' onChange={handleChangePersonal} placeholder='Address' />
                        <Input className='my-2' name='phone' onChange={handleChangePersonal} placeholder='Phone number' />
                        <Input className='my-2' name='email' onChange={handleChangePersonal} placeholder='Email id' />
                    </div>

                    {/* Technical Skills Area */}
                    <div className='mb-4'>
                        <Heading as='h4' size='md' className='my-2'>Technical Skills</Heading>
                        <Divider mb={2}/>
                        <Input className='my-2' name='skill' onChange={handleChangePersonal} placeholder='Separate skills by comma' />
                    </div>

                    {/* Education Area */}
                    <div className='mb-4'>
                        <Heading as='h4' size='md' className='my-2'>Education</Heading>
                        <Divider mb={2}/>
                        <Button onClick={() => {
                            const next = educationCount + 1;
                            setEduIds([...eduIds, next]);
                            setEducationCount(next);
                        }} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Education</Button>
                        {eduIds.map(id => (
                            <Box key={id} mb={3}>
                                <Input className='my-2' id={`eTitle${id}`} name='eName' onChange={handleChangeEducation} placeholder='Enter Title' />
                                <Textarea className='my-2' id={`eDescription${id}`} name='eDescription' onChange={handleChangeEducation} placeholder='Description' />
                            </Box>
                        ))}
                    </div>

                    {/* Projects Area */}
                    <div className='mb-4'>
                        <Flex align='center' justify='space-between'>
                            <Heading as='h4' size='md' className='my-2'>Projects</Heading>
                            <input type="checkbox" checked={!checkProj} onChange={() => setCheckProj(!checkProj)} style={{width: '20px', height: '20px'}} />
                        </Flex>
                        <Divider mb={2}/>
                        <Button disabled={checkProj} onClick={() => {
                            const next = projectCount + 1;
                            setProjIds([...projIds, next]);
                            setProjectCount(next);
                        }} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Projects</Button>
                        {!checkProj && projIds.map(id => (
                            <Box key={id} mb={3}>
                                <Input className='my-2' disabled={checkProj} id={`pTitle${id}`} name='pName' onChange={handleChangeProject} placeholder='Enter Project Title' />
                                <Textarea className='my-2' disabled={checkProj} id={`pDescription${id}`} name='pDescription' onChange={handleChangeProject} placeholder='Project Description' />
                            </Box>
                        ))}
                    </div>

                    {/* Work Experience */}
                    <div className='mb-4'>
                        <Flex align='center' justify='space-between'>
                            <Heading as='h4' size='md' className='my-2'>Work Experience</Heading>
                            <input type="checkbox" checked={!checkWork} onChange={() => setCheckWork(!checkWork)} style={{width: '20px', height: '20px'}} />
                        </Flex>
                        <Divider mb={2}/>
                        <Button disabled={checkWork} onClick={() => {
                            const next = workCount + 1;
                            setWorkIds([...workIds, next]);
                            setWorkCount(next);
                        }} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Experience</Button>
                        {!checkWork && workIds.map(id => (
                            <Box key={id} mb={3}>
                                <Input className='my-2' id={`wTitle${id}`} name='wName' onChange={handleChangeWork} placeholder='Enter Job Title' />
                                <Textarea className='my-2' id={`wDescription${id}`} name='wDescription' onChange={handleChangeWork} placeholder='Work Description' />
                            </Box>
                        ))}
                    </div>

                    {/* Awards Area */}
                    <div className='mb-4'>
                        <Flex align='center' justify='space-between'>
                            <Heading as='h4' size='md' className='my-2'>Awards & Achievement</Heading>
                            <input type="checkbox" checked={!checkAward} onChange={() => setCheckAward(!checkAward)} style={{width: '20px', height: '20px'}} />
                        </Flex>
                        <Divider mb={2}/>
                        <Textarea className='my-2' name='awards' disabled={checkAward} onChange={(e) => setAwardData({ awards: e.target.value })} placeholder='Use comma to separate Achievement' />
                    </div>
                </div>
            </Box>

            {/* RIGHT SIDE: LIVE PREVIEW (Sticky) */}
            <Box flex="1" h="85vh" position="sticky" top="100px" bg="white" borderRadius="lg" boxShadow="2xl" p={8} overflowY="auto">
                <Text fontSize="xs" fontWeight="bold" color="gray.400" mb={4} textAlign="right">LIVE PREVIEW</Text>
                
                {/* Simulated Template Preview */}
                <Box border="1px solid" borderColor="gray.200" p={6} minH="100%" id="resume-preview-area">
                    <Flex align="center" direction="column" mb={5}>
                        <img src={personalData.profileImage} alt="profile" style={{width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px'}} />
                        <Heading size="lg">{personalData.name || "Full Name"}</Heading>
                        <Text color="teal.600" fontWeight="bold">{personalData.profile || "Professional Title"}</Text>
                    </Flex>
                    
                    <Divider my={4} />
                    
                    <Stack spacing={4}>
                        <Box>
                            <Heading size="xs" textTransform="uppercase">Contact Information</Heading>
                            <Text fontSize="sm">📧 {personalData.email || "email@example.com"}</Text>
                            <Text fontSize="sm">📞 {personalData.phone || "+91 XXXXXXXXXX"}</Text>
                            <Text fontSize="sm">📍 {personalData.address || "City, Country"}</Text>
                        </Box>
                        
                        <Box>
                            <Heading size="xs" textTransform="uppercase">Summary</Heading>
                            <Text fontSize="sm">{personalData.summary || "Your career summary will appear here..."}</Text>
                        </Box>

                        <Box>
                            <Heading size="xs" textTransform="uppercase">Skills</Heading>
                            <Text fontSize="sm">{personalData.skill || "No skills added yet"}</Text>
                        </Box>
                        
                        {/* Baaki sections ko bhi map karke yahan dikha sakte hain */}
                    </Stack>
                </Box>
            </Box>

        </Flex>
    )
}

export default UserDataCollect;