import React from 'react';
import FeaturesHero from '../../components/ui/Features/FeaturesHero';
import FeatureGrid from '../../components/ui/Features/FeatureGrid';
import SecuritySection from '../../components/ui/Features/SecuritySection';

const Features = () => {
    return (
        <div className="min-h-screen bg-white">
            <FeaturesHero />
            <FeatureGrid />
            <SecuritySection />
        </div>
    );
};

export default Features;