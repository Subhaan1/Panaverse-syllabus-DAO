import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    Text,
    Image,
    
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  
  interface StatsCardProps {
    title: string;
    stat: string;
    Image: any;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat,Image } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel w={"50"} h={"50"} isTruncated>
          {Image}
          {/* ["<Image src='/studentIcon.png'></Image>","<Image src='/Web2.jpg'></Image>"] */}
        </StatLabel>    
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={2}
          fontWeight={'bold'}>
          We are Proud
        </chakra.h1>
        <Text textAlign={'center'}  py={6}>
            You don't have to struggle alone, you've got our assistance and help.</Text>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard  title={'We serve'} stat={'50,000 people'} Image={'/studentIcon.png'}/>
          {/* <StatsCard title={'We serve'} stat={'50,000 people'}/>

          <StatsCard title={'In'} stat={'30 different countries'}/>
          <StatsCard title={'Who speak'} stat={'100 different languages'}/> */}
        </SimpleGrid>
      </Box>
    );
  }