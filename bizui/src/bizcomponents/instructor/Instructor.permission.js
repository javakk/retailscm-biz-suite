

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
import styles from './Instructor.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (instructor,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{instructor.id}</Description> 
<Description term="Title">{instructor.title}</Description> 
<Description term="Family Name">{instructor.familyName}</Description> 
<Description term="Given Name">{instructor.givenName}</Description> 
<Description term="Cell Phone">{instructor.cellPhone}</Description> 
<Description term="Email">{instructor.email}</Description> 
<Description term="Introduction">{instructor.introduction}</Description> 
<Description term="Last Update Time">{ moment(instructor.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = instructor => {
  const {InstructorBase} = GlobalComponents
  return <PermissionSetting targetObject={instructor}  targetObjectMeta={InstructorBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class InstructorPermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  instructor = this.props.instructor;
    const { id,displayName, companyTrainingCount } = instructor
    const cardsData = {cardsName:"Instructor",cardsFor: "instructor",cardsSource: instructor,
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
  instructor: state._instructor,
}))(Form.create()(InstructorPermission))

