// Libraries
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

// State
import { stateModel, resourceModel } from './state'

// Getters
import { isRoleStaff, isRoleEdit, isRoleView, isEntityType, isTypeBcomp, isTypeCoop,
  isShowBackBtn, isShowReviewConfirmBtn, isShowFilePayBtn, isEnableFilePayBtn, isBusySaving,
  getFilingId, getBusinessIdentifier, getApprovedName, getNameRequestDetails, getNameRequestApplicant,
  getOfficeAddresses, isApplicationValid, getSteps, getMaxStep, getCurrentDate }
  from '@/store/getters'

// Mutations
import { mutateCurrentStep, mutateIsSaving, mutateIsSavingResuming, mutateIsFilingPaying,
  mutateResource, mutateKeycloakRoles, mutateAuthRoles, mutateAuthenticated, mutateCurrentDate,
  mutateCertifyStatementResource, mutateCertifyState, mutateBusinessContact, mutateDefineCompanyStepValidity,
  mutateNameRequestState, mutateFilingId, mutateOfficeAddresses, mutateOrgPersonList,
  mutateAddPeopleAndRoleStepValidity, mutateShareClasses, mutateCreateShareStructureStepValidity }
  from '@/store/mutations'

// Actions
import { setCurrentStep, setIsSaving, setIsSavingResuming, setIsFilingPaying, setResource,
  setKeycloakRoles, setAuthRoles, setAuthenticated, setCurrentDate, setCertifyStatementResource, setCertifyState,
  setBusinessContact, setDefineCompanyStepValidity, setNameRequestState, setFilingId, setOfficeAddresses,
  setOrgPersonList, setAddPeopleAndRoleStepValidity, setShareClasses,
  setCreateShareStructureStepValidity } from './actions'

Vue.use(Vuex)

export const store: Store<any> = new Vuex.Store<any>({
  state: {
    stateModel,
    resourceModel
  },
  getters: {
    isRoleStaff,
    isRoleEdit,
    isRoleView,
    isEntityType,
    isTypeBcomp,
    isTypeCoop,
    isShowBackBtn,
    isShowReviewConfirmBtn,
    isShowFilePayBtn,
    isEnableFilePayBtn,
    isBusySaving,
    getApprovedName,
    getBusinessIdentifier,
    getFilingId,
    getNameRequestApplicant,
    getNameRequestDetails,
    getOfficeAddresses,
    isApplicationValid,
    getSteps,
    getMaxStep,
    getCurrentDate
  },
  mutations: {
    mutateCurrentStep,
    mutateIsSaving,
    mutateIsSavingResuming,
    mutateIsFilingPaying,
    mutateResource,
    mutateKeycloakRoles,
    mutateAuthRoles,
    mutateAuthenticated,
    mutateCurrentDate,
    mutateCertifyStatementResource,
    mutateCertifyState,
    mutateBusinessContact,
    mutateDefineCompanyStepValidity,
    mutateNameRequestState,
    mutateFilingId,
    mutateOfficeAddresses,
    mutateOrgPersonList,
    mutateAddPeopleAndRoleStepValidity,
    mutateShareClasses,
    mutateCreateShareStructureStepValidity
  },
  actions: {
    setCurrentStep,
    setIsSaving,
    setIsSavingResuming,
    setIsFilingPaying,
    setResource,
    setKeycloakRoles,
    setAuthRoles,
    setAuthenticated,
    setCurrentDate,
    setCertifyStatementResource,
    setCertifyState,
    setBusinessContact,
    setDefineCompanyStepValidity,
    setNameRequestState,
    setFilingId,
    setOfficeAddresses,
    setOrgPersonList,
    setAddPeopleAndRoleStepValidity,
    setShareClasses,
    setCreateShareStructureStepValidity
  }
})
