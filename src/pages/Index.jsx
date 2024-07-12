import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table";
import { CSVLink } from "react-csv";

const Index = () => {
  const [companyName, setCompanyName] = useState("");
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch company name
    fetch("/api/company-name")
      .then((response) => response.json())
      .then((data) => setCompanyName(data.name))
      .catch((error) => setError("Failed to load company name"));

    // Fetch employee data
    fetch("/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => setError("Failed to load employee data"));
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
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th key={header.key}>{header.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee.id}>
              <Td>{employee.name}</Td>
              <Td>{employee.id}</Td>
              <Td>{employee.pan}</Td>
              <Td>{employee.pran}</Td>
              <Td>{employee.totalEmployerContribution}</Td>
              <Td>{employee.pensionEquityFund1}</Td>
              <Td>{employee.equityContribution1}</Td>
              <Td>{employee.pensionGsecFund1}</Td>
              <Td>{employee.gsecContribution1}</Td>
              <Td>{employee.pensionCBonFund1}</Td>
              <Td>{employee.cBonContribution1}</Td>
              <Td>{employee.pensionAltFFund1}</Td>
              <Td>{employee.altFContribution1}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Index;