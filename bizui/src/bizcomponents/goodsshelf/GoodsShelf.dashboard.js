

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './GoodsShelf.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'
import appLocaleName from '../../common/Locale.tool'

const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,defaultRenderAnalytics,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers,
  defaultQuickFunctions, defaultRenderSubjectList,
}= DashboardTool



const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(goodsShelf)=>{return [
	 ]}

const internalImageListOf = (goodsShelf) =>defaultImageListOf(goodsShelf,imageList)

const optionList =(goodsShelf)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalRenderSubjectList = defaultRenderSubjectList
const internalSettingListOf = (goodsShelf) =>defaultSettingListOf(goodsShelf, optionList)
const internalLargeTextOf = (goodsShelf) =>{

	return null
	

}


const internalRenderExtraHeader = defaultRenderExtraHeader

const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf


const internalRenderTitle = (cardsData,targetComponent) =>{
  
  
  const linkComp=cardsData.returnURL?<Link to={cardsData.returnURL}> <FontAwesome name="arrow-left"  /> </Link>:null
  return (<div>{linkComp}{cardsData.cardsName}: {cardsData.displayName}</div>)

}


const internalSummaryOf = (goodsShelf,targetComponent) =>{
	
	
	const {GoodsShelfService} = GlobalComponents
	const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{goodsShelf.id}</Description> 
<Description term="Location">{goodsShelf.location}</Description> 
<Description term="Storage Space">{goodsShelf.storageSpace==null?appLocaleName(userContext,"NotAssigned"):`${goodsShelf.storageSpace.displayName}(${goodsShelf.storageSpace.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"Storage Space","storageSpace",GoodsShelfService.requestCandidateStorageSpace,
	      GoodsShelfService.transferToAnotherStorageSpace,"anotherStorageSpaceId",goodsShelf.storageSpace?goodsShelf.storageSpace.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="Supplier Space">{goodsShelf.supplierSpace==null?appLocaleName(userContext,"NotAssigned"):`${goodsShelf.supplierSpace.displayName}(${goodsShelf.supplierSpace.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"Supplier Space","supplierSpace",GoodsShelfService.requestCandidateSupplierSpace,
	      GoodsShelfService.transferToAnotherSupplierSpace,"anotherSupplierSpaceId",goodsShelf.supplierSpace?goodsShelf.supplierSpace.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="Damage Space">{goodsShelf.damageSpace==null?appLocaleName(userContext,"NotAssigned"):`${goodsShelf.damageSpace.displayName}(${goodsShelf.damageSpace.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"Damage Space","damageSpace",GoodsShelfService.requestCandidateDamageSpace,
	      GoodsShelfService.transferToAnotherDamageSpace,"anotherDamageSpaceId",goodsShelf.damageSpace?goodsShelf.damageSpace.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="Last Update Time">{ moment(goodsShelf.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
        {buildTransferModal(goodsShelf,targetComponent)}
      </DescriptionList>
	)

}

const internalQuickFunctions = defaultQuickFunctions

class GoodsShelfDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'goodsShelf'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, goodsShelfStockCountListMetaInfo, goodsAllocationListMetaInfo, goodsShelfStockCountCount, goodsAllocationCount } = this.props.goodsShelf
    if(!this.props.goodsShelf.class){
      return null
    }
    const returnURL = this.props.returnURL
    
    const cardsData = {cardsName:"Goods Shelf",cardsFor: "goodsShelf",
    	cardsSource: this.props.goodsShelf,returnURL,displayName,
  		subItems: [
{name: 'goodsShelfStockCountList', displayName:'Goods Shelf Stock Count',type:'goodsShelfStockCount',count:goodsShelfStockCountCount,addFunction: true, role: 'goodsShelfStockCount', metaInfo: goodsShelfStockCountListMetaInfo, renderItem: GlobalComponents.GoodsShelfStockCountBase.renderItemOfList},
{name: 'goodsAllocationList', displayName:'Goods Allocation',type:'goodsAllocation',count:goodsAllocationCount,addFunction: true, role: 'goodsAllocation', metaInfo: goodsAllocationListMetaInfo, renderItem: GlobalComponents.GoodsAllocationBase.renderItemOfList},
    
      	],
  	};
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderTitle = this.props.renderTitle || internalRenderTitle
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    const renderAnalytics = this.props.renderAnalytics || defaultRenderAnalytics
    const quickFunctions = this.props.quickFunctions || internalQuickFunctions
    const renderSubjectList = this.props.renderSubjectList || internalRenderSubjectList
    
    return (

      <PageHeaderLayout
        title={renderTitle(cardsData,this)}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
       
        {renderExtraHeader(cardsData.cardsSource)}
        {quickFunctions(cardsData)} 
        {renderAnalytics(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}  
        {renderSubjectList(cardsData)}       
        {largeTextOf(cardsData.cardsSource)}
        {renderExtraFooter(cardsData.cardsSource)}
  		
      </PageHeaderLayout>
    
    )
  }
}

export default connect(state => ({
  goodsShelf: state._goodsShelf,
  returnURL: state.breadcrumb.returnURL,
  
}))(Form.create()(GoodsShelfDashboard))

