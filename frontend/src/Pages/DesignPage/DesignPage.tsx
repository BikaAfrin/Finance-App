import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { TestDataCompany } from '../../Components/Table/testData';

type Props = {}
const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];
const DesignPage = (props: Props) => {
  return (
    <div>DesignPage
    <RatioList config={tableConfig} data={data}/>
    <Table config={tableConfig} data={data}/>
    </div>
  )
}

export default DesignPage