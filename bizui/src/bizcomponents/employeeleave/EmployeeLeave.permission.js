

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'

import DashboardTool from '../../common/Dashboard.tool'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './EmployeeLeave.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (employeeLeave,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{employeeLeave.id}</Description> 
<Description term="Leave Duration Hour">{employeeLeave.leaveDurationHour}</Description> 
<Description term="Remark">{employeeLeave.remark}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = employeeLeave => {
  const {EmployeeLeaveBase} = GlobalComponents
  return <PermissionSetting targetObject={employeeLeave}  targetObjectMeta={EmployeeLeaveBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class EmployeeLeavePermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  employeeLeave = this.props.employeeLeave;
    const { id,displayName,  } = employeeLeave
    const cardsData = {cardsName:"Employee Leave",cardsFor: "employeeLeave",cardsSource: employeeLeave,
  		subItems: [
    
      	],
  	};
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const summaryOf = this.props.summaryOf || internalSummaryOf
   
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
      {renderPermissionSetting(cardsData.cardsSource)}
      
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  employeeLeave: state._employeeLeave,
}))(Form.create()(EmployeeLeavePermission))

