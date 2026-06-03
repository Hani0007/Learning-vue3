<script setup>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import HomeCards from './components/HomeCards.vue';
import JobListings from './components/JobListings.vue';
</script>
<template>
  <NavBar />
  <HeroSection
    title="Become a Vue Dev"
    subtitle=" Find the Vue job that fits your skills and needs"
  />
  <HomeCards />
  <JobListings />
</template>