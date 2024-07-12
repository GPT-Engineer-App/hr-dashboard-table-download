import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { CSVLink } from "react-csv";

const Index = () => {
  const [companyName, setCompanyName] = useState("");
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use dummy data for company name
    const dummyCompanyName = "Acme Inc";
    setCompanyName(dummyCompanyName);

    // Use dummy data for employees
    const dummyEmployees = [
      {
        id: 1,
        name: "John Doe",
        pan: "ABCDE1234F",
        pran: "123456789012",
        totalEmployerContribution: 1000,
        pensionEquityFund1: 200,
        equityContribution1: 300,
        pensionGsecFund1: 150,
        gsecContribution1: 100,
        pensionCBonFund1: 250,
        cBonContribution1: 200,
        pensionAltFFund1: 50,
        altFContribution1: 100,
      },
      {
        id: 2,
        name: "Jane Smith",
        pan: "FGHIJ5678K",
        pran: "987654321098",
        totalEmployerContribution: 1200,
        pensionEquityFund1: 220,
        equityContribution1: 320,
        pensionGsecFund1: 170,
        gsecContribution1: 120,
        pensionCBonFund1: 270,
        cBonContribution1: 220,
        pensionAltFFund1: 70,
        altFContribution1: 120,
      },
      // Add more dummy employees as needed
    ];
    setEmployees(dummyEmployees);
  }, []);

  const headers = [
    { label: "Employee Name", key: "name" },
    { label: "Employee ID", key: "id" },
    { label: "PAN", key: "pan" },
    { label: "PRAN", key: "pran" },
    { label: "Total Employer Contribution", key: "totalEmployerContribution" },
    { label: "Pension Equity Fund 1", key: "pensionEquityFund1" },
    { label: "Equity Contribution 1 (E)", key: "equityContribution1" },
    { label: "Pension Gsec Fund 1", key: "pensionGsecFund1" },
    { label: "Gsec Contribution 1 (G)", key: "gsecContribution1" },
    { label: "Pension CBon Fund 1", key: "pensionCBonFund1" },
    { label: "CBon Contribution 1 (C)", key: "cBonContribution1" },
    { label: "Pension AltF Fund 1", key: "pensionAltFFund1" },
    { label: "AltF Contribution 1 (A)", key: "altFContribution1" },
  ];

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{companyName}</h1>
      <div className="mb-4">
        <CSVLink
          data={employees}
          headers={headers}
          filename={`${companyName}_employees.csv`}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Download CSV
        </CSVLink>
        {/* Add Excel download button here */}
      </div>
      <Table className="table-auto w-full">
        <TableCaption>Employee Data</TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header.key}>{header.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.pan}</TableCell>
              <TableCell>{employee.pran}</TableCell>
              <TableCell>{employee.totalEmployerContribution}</TableCell>
              <TableCell>{employee.pensionEquityFund1}</TableCell>
              <TableCell>{employee.equityContribution1}</TableCell>
              <TableCell>{employee.pensionGsecFund1}</TableCell>
              <TableCell>{employee.gsecContribution1}</TableCell>
              <TableCell>{employee.pensionCBonFund1}</TableCell>
              <TableCell>{employee.cBonContribution1}</TableCell>
              <TableCell>{employee.pensionAltFFund1}</TableCell>
              <TableCell>{employee.altFContribution1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Index;