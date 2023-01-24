import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const {repos}=useContext(GithubContext)

  
  let chartData=repos.reduce((total,item)=> {
    const {language}=item
    if(!language) return total
    if(!total[language]){
      total[language]= {label:language, value:1}
    }else {
     total[language]= {...total[language], value:total[language].value +1}
    }
    return total
  },{})
   chartData=Object.values(chartData).sort((a,b)=> {
    return b.value - a.value
   }).slice(0,4)



console.log(chartData)
  return <section className='section'>
    <Wrapper className='section-center'>
    <Pie3D data={chartData} />
      {/* <ExampleChart data={chartData} />  */}

    </Wrapper>
  </section>
  
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
