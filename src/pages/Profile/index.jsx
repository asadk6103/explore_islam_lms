import React from 'react'
import Box from '../../components/Box'
import { useNavigate } from 'react-router-dom'
import { APP_SLUGS } from '../../layout/navigation/constants'
import HorizontalTabs from '../../components/HorizontalTabs'
import { SAMPLE_DATA } from './constants'
import BasicProfile from './BasicProfile'
import PaymentInfo from './PaymentInfo'
import SubscriptionInfo from './SubscriptionInfo'


const RenderTabContent = React.memo(({ activeTab }) => {
  switch (activeTab) {
    case 1:
        return <BasicProfile />
      break;
    case 2:
        return <PaymentInfo />
      break;
    case 3:
        return <SubscriptionInfo />
      break;

    default:
      break;
  }
})
const Profile = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = React.useState(1)
  return (
    <Box title='Profile Details' backButtonClick={() => navigate(`/${APP_SLUGS.dashboard}`)} boxClasses='bg-white px-8 py-8 shadow-lg'>
      <div className="grid grid-cols-1 mb-4">
        <HorizontalTabs activeTab={activeTab} handleChangeTab={setActiveTab} items={SAMPLE_DATA} />
      </div>
      <div>
        <RenderTabContent activeTab={activeTab} />
      </div>
    </Box>
  )
}

export default Profile