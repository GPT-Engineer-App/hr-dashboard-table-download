import React from "react";

export const Table = ({ children, className }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
    {children}
  </table>
);

export const Thead = ({ children, className }) => (
  <thead className={`bg-gray-50 ${className}`}>
    {children}
  </thead>
);

export const Tbody = ({ children, className }) => (
  <tbody className={`bg-white divide-y divide-gray-200 ${className}`}>
    {children}
  </tbody>
);

export const Tr = ({ children, className }) => (
  <tr className={className}>
    {children}
  </tr>
);

export const Th = ({ children, className }) => (
  <th
    scope="col"
    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
  >
    {children}
  </th>
);

export const Td = ({ children, className }) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`}>
    {children}
  </td>
);