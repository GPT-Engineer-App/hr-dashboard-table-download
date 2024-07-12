import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const fetchCompanyName = async () => {
  const response = await fetch("/api/company-name");
  if (!response.ok) {
    throw new Error("Failed to fetch company name");
  }
  return response.json();
};

const fetchEmployeeData = async () => {
  const response = await fetch("/api/employee-data");
  if (!response.ok) {
    throw new Error("Failed to fetch employee data");
  }
  return response.json();
};

const Index = () => {
  const { data: companyName, error: companyError } = useQuery({
    queryKey: ["companyName"],
    queryFn: fetchCompanyName,
  });

  const { data: employeeData, error: employeeError } = useQuery({
    queryKey: ["employeeData"],
    queryFn: fetchEmployeeData,
  });

  const handleDownloadCSV = () => {
    const csvData = employeeData.map((row) =>
      [
        row.employeeName,
        row.employeeId,
        row.pan,
        row.pran,
        row.totalEmployerContribution,
        row.pensionEquityFund1,
        row.equityContribution1,
        row.pensionGsecFund1,
        row.gsecContribution1,
        row.pensionCbonFund1,
        row.cbonContribution1,
        row.pensionAltfFund1,
        row.altfContribution1,
      ].join(",")
    );
    const csvContent = ["Employee Name,Employee ID,PAN,PRAN,Total Employer Contribution,Pension Equity Fund 1,Equity Contribution 1 (E),Pension Gsec Fund 1,Gsec Contribution 1 (G),Pension CBon Fund 1,CBon Contribution 1 (C),Pension AltF Fund 1,AltF Contribution 1 (A)", ...csvData].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "employee_data.csv");
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employeeData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employee Data");
    XLSX.writeFile(workbook, "employee_data.xlsx");
  };

  if (companyError || employeeError) {
    return <div className="text-center text-red-500">Failed to load data</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">{companyName}</h1>
      <div className="flex justify-end mb-4 space-x-2">
        <Button onClick={handleDownloadCSV}>Download CSV</Button>
        <Button onClick={handleDownloadExcel}>Download Excel</Button>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>Employee Name</Th>
            <Th>Employee ID</Th>
            <Th>PAN</Th>
            <Th>PRAN</Th>
            <Th>Total Employer Contribution</Th>
            <Th>Pension Equity Fund 1</Th>
            <Th>Equity Contribution 1 (E)</Th>
            <Th>Pension Gsec Fund 1</Th>
            <Th>Gsec Contribution 1 (G)</Th>
            <Th>Pension CBon Fund 1</Th>
            <Th>CBon Contribution 1 (C)</Th>
            <Th>Pension AltF Fund 1</Th>
            <Th>AltF Contribution 1 (A)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employeeData?.map((employee) => (
            <Tr key={employee.employeeId}>
              <Td>{employee.employeeName}</Td>
              <Td>{employee.employeeId}</Td>
              <Td>{employee.pan}</Td>
              <Td>{employee.pran}</Td>
              <Td>{employee.totalEmployerContribution}</Td>
              <Td>{employee.pensionEquityFund1}</Td>
              <Td>{employee.equityContribution1}</Td>
              <Td>{employee.pensionGsecFund1}</Td>
              <Td>{employee.gsecContribution1}</Td>
              <Td>{employee.pensionCbonFund1}</Td>
              <Td>{employee.cbonContribution1}</Td>
              <Td>{employee.pensionAltfFund1}</Td>
              <Td>{employee.altfContribution1}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Index;