import SalesCardContainer from "@/components/sales/SalesCardContainer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { fetchAdminOrders } from "@/utils/action";
import { formatCurrency, formatDate } from "@/utils/format";

const SalesPage = async () => {
  const orders = await fetchAdminOrders();

  return (
    <div className="">
      <SalesCardContainer />

      <Card
        className="bg-[#072611]/60 dark:bg-slate-900/80 backdrop-blur-sm
                border border-emerald-700/30 dark:border-blue-300/20 
                shadow-[0_4px_12px_rgba(34,139,34,0.15)] dark:shadow-[0_4px_12px_rgba(30,144,255,0.2)]"
      >
        <CardContent>
          <Table>
            <TableCaption>Total orders : {orders.length}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Order Total</TableHead>
                <TableHead>Tax</TableHead>
                <TableHead>Shipping</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const {
                  id,
                  products,
                  orderTotal,
                  tax,
                  shipping,
                  createdAt,
                  email,
                } = order;

                return (
                  <TableRow key={id}>
                    <TableCell>{email}</TableCell>
                    <TableCell>{products}</TableCell>
                    <TableCell>{formatCurrency(orderTotal)}</TableCell>
                    <TableCell>{formatCurrency(tax)}</TableCell>
                    <TableCell>{formatCurrency(shipping)}</TableCell>
                    <TableCell>{formatDate(createdAt)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesPage;
