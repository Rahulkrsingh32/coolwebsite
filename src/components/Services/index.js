import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import{
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                    <ServicesWrapper>
                
                        <ServicesCard>
                            <ServicesIcon src={Icon1} />
                            <ServicesH2>Reduce expenses</ServicesH2>
                            <ServicesP>We help reduce fees and hsdkdjfh increse your revenu</ServicesP>
                            
                        </ServicesCard>

                        <ServicesCard>
                            <ServicesIcon src={Icon2} />
                            <ServicesH2>Virtual offices</ServicesH2>
                            <ServicesP>You can access our platform hhskjid anywhere in the world</ServicesP>
                            
                        </ServicesCard>

                        <ServicesCard>
                            <ServicesIcon src={Icon3} />
                            <ServicesH2>Premium Benifits</ServicesH2>
                            <ServicesP>Unlock our our special membership card that returns %% cash back.</ServicesP>
                            
                        </ServicesCard>
                    </ServicesWrapper>
                
            </ServicesContainer>
        
    );
};

export default Services
