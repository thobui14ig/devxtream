import React, { useRef } from 'react'
import NhanvienProvider from '../../context/nhanvien.context'
import NhanvienHOC from './nhanvienHOC'
import { useReactToPrint } from 'react-to-print';
export default function Nhanvien() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true
  });
  return (
    <>
      <div className="content-wrapper" ref={componentRef}>
        <NhanvienProvider>
            <NhanvienHOC/>
        </NhanvienProvider>      
      
      </div>
      <button onClick={handlePrint }>Print</button>    
    </>


  )
}
