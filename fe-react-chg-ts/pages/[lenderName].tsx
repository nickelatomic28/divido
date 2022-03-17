import { useRouter } from 'next/router';
import { NextPage } from 'next';
import ApplicationForm from './ApplicationForm'
import { useEffect, useState } from 'react';

const LenderNamePage: NextPage = (props) => {
  const router = useRouter();
  const lenderSlug = router.query.lenderName?.toString();
  const [data, setData] = useState(null)

  useEffect(() => {
    if(lenderSlug){
    fetch(`/api/lenders/${lenderSlug}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })}
  }, [lenderSlug])
  
  return (
    <>
      {data && <ApplicationForm lenderSlug={lenderSlug} name={data.name} fields={data.fields} />}
    </>
  );
};

export default LenderNamePage;
