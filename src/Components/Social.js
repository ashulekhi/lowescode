import MyButton from "./MyButton"
function SocialLogin({loginMechanism}){
  return (
    <div>
        <MyButton loginMechanism={loginMechanism}></MyButton>
    </div>
  )
}

export default  SocialLogin;