import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


const menuData = {menuName:"User App", menuFor: "userApp",
  		subItems: [
  {name: 'listAccessList', displayName:'List Access', icon:'list',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'objectAccessList', displayName:'Object Access', icon:'accessible-icon',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  
  		],
}

const fieldLabels = {
  id: 'Id',
  title: 'Title',
  secUser: 'Sec User',
  appIcon: 'App Icon',
  fullAccess: 'Full Access',
  permission: 'Permission',
  objectType: 'Object Type',
  objectId: 'Object Id',
  location: 'Location',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderTextCell(text,record,'userApp') , sorter: true },
  { title: fieldLabels.title, debugtype: 'string', dataIndex: 'title', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.secUser, dataIndex: 'secUser', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.appIcon, debugtype: 'string', dataIndex: 'appIcon', width: '13',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.fullAccess, dataIndex: 'fullAccess', render: (text, record) =>renderBooleanCell(text, record), sorter:true },
  { title: fieldLabels.permission, debugtype: 'string', dataIndex: 'permission', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.objectType, debugtype: 'string', dataIndex: 'objectType', width: '31',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.objectId, debugtype: 'string', dataIndex: 'objectId', width: '14',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.location, debugtype: 'string', dataIndex: 'location', width: '16',render: (text, record)=>renderTextCell(text,record)},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(userApp,targetComponent)=>{

	
	
	
	const userContext = null
	return (
	<div key={userApp.id}>
	
	<DescriptionList  key={userApp.id} size="small" col="4">
<Description term="Id">{userApp.id}</Description> 
<Description term="Title">{userApp.title}</Description> 
<Description term="Sec User">{userApp.secUser==null?appLocaleName(userContext,"NotAssigned"):`${userApp.secUser.displayName}(${userApp.secUser.id})`}
</Description>
<Description term="App Icon">{userApp.appIcon}</Description> 
<Description term="Permission">{userApp.permission}</Description> 
<Description term="Object Type">{userApp.objectType}</Description> 
<Description term="Object Id">{userApp.objectId}</Description> 
<Description term="Location">{userApp.location}</Description> 
	
        
      </DescriptionList>
       <Divider style={{ height: '2px' }} />
      </div>
	)

}
	



const UserAppBase={menuData,displayColumns,fieldLabels,renderItemOfList}
export default UserAppBase



