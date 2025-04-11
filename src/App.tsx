import { useEffect, useState } from 'react'
import './Styles/App.css'
import fetchGetSaldo from './Methods/fetchGetSaldo';

function App() {
  const [total, setTotal] = useState(0);
  const [small, setSmall] = useState(0);
  const [mid, setMid] = useState(0);
  const [big, setBig] = useState(0);
  // const presupuesto = 5000;
  // const porcentaje = Math.min((small / presupuesto) * 100, 100);

  useEffect(() => {
    const getSaldo = async () => {
      const response = await fetchGetSaldo();

      const small = response.gastoShort;
      const mid = response.gastoMid;
      const big = response.gastoBig;

      const totalR = small + mid + big;

      setSmall(Math.round(small));
      setMid(Math.round(mid));
      setBig(Math.round(big));
      setTotal(Math.round(totalR));
    };
    getSaldo();
  }, []);
  return (
    <>
      {small == 0 ? <h2>cargando...</h2> : 
      <>
      <h2>{small} / 5000</h2>
      <h2>{mid} / 5000</h2>
      <h2>{big} / 5000</h2>
      <h2>{total} / 5000</h2>

      </>
      }
    </>
  )
}

export default App
