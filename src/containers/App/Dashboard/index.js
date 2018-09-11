import React, { Component } from 'react';
import { connect } from 'react-redux';

import { expense, income } from '../../../actions/money.action';
import { decrementSavings } from '../../../actions/induction.action';
import { addCategory } from '../../../actions/settings.action';

import Table from '../../../components/Dashboard/Table';
import Box from '../../../components/Dashboard/Box';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="dashboard">
        <div className="dashboard-container card-list">
          <Box
            Category="Ingresos Totales"
            Color="green"
            icon="far fa-arrow-alt-circle-up"
            total={this.props.totalIncomes}
          />
          <Box
            Category="Gastos Totales"
            Color="red"
            icon="far fa-arrow-alt-circle-down"
            total={this.props.totalExpenses}
          />
          <Box
            Category="Presupuesto"
            Color="orange"
            icon="fas fa-wallet"
            total={this.props.money}
          />
          <Box
            Category="Ahorro esta semana"
            Color="blue"
            icon="fas fa-hand-holding-usd"
            total={this.props.savings}
          />
        </div>
        <Table
          income={this.props.income}
          decrementSavings={this.props.decrementSavings}
          addCategory={this.props.addCategory}
          rojo={this.state.rojo}
          verde={this.state.verde}
          azul={this.state.azul}
          colorOnClick={this.selectColor}
          actions={this.props.actions}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const induction = state.reducers.induction;
  const money = state.reducers.money;
  return {
    initialBudget: induction.initialBudget,
    dailyAverage: induction.dailyAverage,
    money: money.money,
    totalIncomes: money.totalIncomes,
    totalExpenses: money.totalExpenses,
    savings: induction.savings,
    actions: money.actions
  };
}

export default connect(
  mapStateToProps,
  {
    income,
    expense,
    decrementSavings,
    addCategory
  }
)(Dashboard);