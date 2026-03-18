import { Box, chakra, Container, Stack, Text, Image, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaSnapchat, FaGithub } from 'react-icons/fa';
import logo from './../../Assets/logo.png';

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={{ base: 'blackAlpha.100', _dark: 'whiteAlpha.100' }}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: { base: 'blackAlpha.200', _dark: 'whiteAlpha.200' },
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={{ base: 'gray.50', _dark: 'gray.900' }}
            color={{ base: 'gray.700', _dark: 'gray.200' }}>
            <Container
                textAlign={'center'}
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Image h="44px" src={logo} alt="logo" />
                <Text>© 2023 Resume Builder, All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Github'} href={'https://github.com/imhardikdesai'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Snapchat'} href={'https://twitter.com/imhardikdesai'}>
                        <FaSnapchat />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://instagram.com/imhardikdesai'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}