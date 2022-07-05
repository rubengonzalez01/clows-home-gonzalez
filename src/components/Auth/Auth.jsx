import AuthLoginForm from '../AuthLoginForm/AuthLoginForm';
import AuthRegisterForm from '../AuthRegisterForm/AuthRegisterForm';

export default function Auth({ isRegister, close, setOption }) {
  return (
    <>
      {
        isRegister  ? <AuthRegisterForm close={close} setOption={setOption} />
                    : <AuthLoginForm close={close} setOption={setOption} />
      }
    </>
  );
}