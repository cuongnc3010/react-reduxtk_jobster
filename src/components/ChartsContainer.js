import { useState } from 'react'
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useSelector } from 'react-redux'

const ChartsContainer = () => {
  const [isBarChart, setIsBarChart] = useState(true)
  const { monthlyApplications: data } = useSelector((store) => store.allJobs)
  return (
    <Wrapper>
      <h4>Monthly applications</h4>
      <span>go to</span>
      <button type='button' onClick={() => setIsBarChart(!isBarChart)}>
        {isBarChart ? 'area chart' : ' bar chart'}
      </button>
      {isBarChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}
export default ChartsContainer
