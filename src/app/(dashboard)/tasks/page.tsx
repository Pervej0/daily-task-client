"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const TasksPage = () => {
  const userInfo = getUserInfo();
  console.log(userInfo, "xpxpxpxpx");

  return (
    <div className="px-6 w-full">
      <div className="text-center">
        <h1 className="text-2xl">All Tasks</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Hello</TableCell>
            <TableCell>Here err</TableCell>
            <TableCell>Eref er</TableCell>
            <TableCell className="text-right">23</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TasksPage;
