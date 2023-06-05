import React, { useState } from 'react'
import Card from '../../../components/shared/card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'
import Button from '../../../components/shared/button/Button'
import { verifyOtp } from '../../../http'
import { useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'
const StepOtp = ({onNext}) => {
  const [otp, setOtp] = useState('')
  const {phone, hash} = useSelector((state) => state.auth.otp)
  const dispatch = useDispatch()
  const submit = async () => {
    if(!otp || !phone || !hash) return;
    try {
        const {data} = await verifyOtp({otp, phone, hash})
        dispatch(setAuth(data))
    } catch (error) {
        console.log(error.message)
    }
  }
  return (
    <>

<div className={styles.cardWrapper}>
                <Card
                    title="Enter the code we just texted you"
                    icon="lock-emoji"
                >
                    <TextInput
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <div className={styles.actionButtonWrap}>
                        <Button onClick={submit} text="Next" />
                    </div>
                    <p className={styles.bottomParagraph}>
                        By entering your number, you’re agreeing to our Terms of
                        Service and Privacy Policy. Thanks!
                    </p>
                </Card>
            </div>
    </>
  )
}

export default StepOtp