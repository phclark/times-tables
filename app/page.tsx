"use client";

import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(100);
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const [table, setTable] = useState<string[][]>([]);

  const generateTable = () => {
    const newTable = [];
    for (let i = 0; i <= rows - 1; i++) {
      const row = [];
      for (let j = 1; j <= columns; j++) {
        const numString = (i * number * rows + j * number).toLocaleString(
          "en-US",
        );
        row.push(numString);
      }
      newTable.push(row);
    }
    setTable(newTable);
  };

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-2xl font-bold">Multiplication Table Generator</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            className="border p-2 rounded
            bg-white text-gray-800
            focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200
            "
            placeholder="Enter a number"
            inputMode="numeric"
          />
          <select
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="border p-2 rounded
              bg-white text-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200
            "
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Rows
              </option>
            ))}
          </select>
          <select
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="border p-2 rounded
              bg-white text-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200
            "
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Columns
              </option>
            ))}
          </select>
          <button
            onClick={generateTable}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Generate Table
          </button>
        </div>
        {table.length > 0 && (
          <div className="overflow-x-auto max-md:w-full">
            <table className="border-collapse border border-gray-400 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 p-2 text-center"></th>
                  {[...Array(columns).keys()].map((i) => (
                    <th
                      key={i}
                      className="border border-gray-400 p-2 text-center"
                    >
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border border-gray-400 p-2 text-center">
                      {rowIndex + 1}
                    </td>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-400 p-2 text-center"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
