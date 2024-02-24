import React, { useState } from "react";
import { Box, Flex, Input, Button, Select, Heading, Stack, Image, Text, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaSearch, FaFilter } from "react-icons/fa";

const Index = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const toast = useToast();

  // Fake search handler - In real scenario, this would query a database
  const handleSearch = () => {
    toast({
      title: "Search Feature",
      description: "This would initiate a search for apartments.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Find Apartments in Tel Aviv</Heading>
      <Stack spacing={4} mb={6}>
        <HStack>
          <Input placeholder="Search by neighborhood or ZIP code" value={search} onChange={(e) => setSearch(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
        </HStack>
        <Select placeholder="Filter by type" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="studio">Studio</option>
          <option value="1-bedroom">1 Bedroom</option>
          <option value="2-bedroom">2 Bedroom</option>
          <option value="3-bedroom">3 Bedroom</option>
        </Select>
      </Stack>

      {/* This is where the Mapbox map would be initialized */}
      <Box bg="gray.200" h="300px" mb={6}>
        <Text p={4}>Map would go here (Mapbox placeholder)</Text>
      </Box>

      <VStack spacing={4}>
        {/* This is where the list of apartments would be rendered */}
        {/* In real scenario, each apartment would be a component populated with actual data */}
        <Box p={4} shadow="md" borderWidth="1px">
          <HStack>
            <Image src="https://images.unsplash.com/photo-1707580446080-d53dfcf48400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMHRlbCUyMGF2aXZ8ZW58MHx8fHwxNzA4NzYzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080" w="100px" h="100px" />
            <VStack align="start">
              <Heading size="md">Apartment 1</Heading>
              <Text>2 bedrooms, 1 bathroom, Central Tel Aviv</Text>
              <Text>3500₪/month</Text>
            </VStack>
          </HStack>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <HStack>
            <Image src="https://images.unsplash.com/photo-1670702389136-47ab4a4215dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMHRlbCUyMGF2aXZ8ZW58MHx8fHwxNzA4NzYzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080" w="100px" h="100px" />
            <VStack align="start">
              <Heading size="md">Apartment 2</Heading>
              <Text>1 bedroom, 1 bathroom, North Tel Aviv</Text>
              <Text>3000₪/month</Text>
            </VStack>
          </HStack>
        </Box>
        {/* ... more apartments */}
      </VStack>
    </Box>
  );
};

export default Index;
