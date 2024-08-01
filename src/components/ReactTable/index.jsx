import React from "react";
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";

const sizes = {
    xs: "p-5",
    sm: "p-[34px]",
};

const ReactTable = ({
    columns,
    data = [],
    headerProps = {},
    bodyProps = {},
    className = "",
    rowDataProps = { className: "" },
    size,
    ...restConfig
}) => {
    const tableConfig = {
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        ...restConfig,
    };

    const table = useReactTable(tableConfig);

    return (
        <div className={className}>
            <table {...headerProps}>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} {...header.column.columnDef?.meta}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...bodyProps}>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} {...rowDataProps} className={`${rowDataProps?.className}`} >
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { ReactTable };
