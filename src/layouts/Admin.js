import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

// Alphakolect views

import Agent from "views/admin/Agent.js";
import Transactions from "views/admin/Transactions.js";
import Activation from "views/admin/Activation.js";
import Loan from "views/admin/Loan.js";
import Collection from "views/admin/Collection.js";
import Investment from "views/admin/Investment.js";
import Disbursement from "views/admin/Disbursement.js";
import Customers from "views/admin/Customers.js";
import Accounting from "views/admin/Accounting.js";
import FinancialReporting from "views/admin/FinancialReporting.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            {/* Alphakolect links  */}
            
            <Route path="/admin/agent" exact component={Agent} />
            <Route path="/admin/transactions" exact component={Transactions} />
            <Route path="/admin/activation" exact component={Activation} />
            <Route path="/admin/loan" exact component={Loan} />
            <Route path="/admin/collection" exact component={Collection} />
            <Route path="/admin/investment" exact component={Investment} />
            <Route path="/admin/disbursement" exact component={Disbursement} />                        
            <Route path="/admin/customers" exact component={Customers} />
            <Route path="/admin/accounting" exact component={Accounting} />
            <Route path="/admin/financial_reporting" exact component={FinancialReporting} />
                             
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
