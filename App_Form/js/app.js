  var app = angular.module('DynamicFormApp', ['ui.grid', 'ui.grid.edit']);

  app.controller('DynamicFormController', function($scope, $log) {
       // we would get this from the api
      $scope.entity = {
          "questionare_guid": "adfs-23ds-33fs-fsaf-999999a",
          "questionare_created": "20170530",
          "questionare_created_by": "MSK",
          "question_List": [{
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "Application Information",
              "questions": [{
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Contact Information",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "InputFields",
                  "input": [{
                      "fieldname": "CADB Administrator (Primary Contact)",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "Address",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "City",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "State",
                      "fieldtype": "text",
                      "fieldsize": "2",
                      "validator": "required"
                  }, {
                      "fieldname": "Zip Code",
                      "fieldtype": "text",
                      "fieldsize": "5",
                      "validator": "required"
                  }, {
                      "fieldname": "Email",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "Phone",
                      "fieldtype": "text",
                      "fieldsize": "15",
                      "validator": "required"
                  }, {
                      "fieldname": "Fax",
                      "fieldtype": "text",
                      "fieldsize": "15",
                      "validator": "required"
                  }]
              }, {
                  "id": "agricultural",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Agricultural Development Areas:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"

                  }],
                  "dependent_question": [{
                      "dependent_on": "agricultural",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county requesting SADC certification of an agricultural development area amendment as part of this application approval?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "A copy of the adopted criteria for agricultural development area identification",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "A copy of the CADB resolution of agricultural development area adoption",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "Justification that the adopted agricultural development area meets the statutory criteria set forth at N.J.A.C.2:76-1.3.",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }]
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Project Areas:",
                  "question_text": "For each project area please attach a completed Project Area Summary Form.",
                  "question_help_text": "Add additional rows as needed",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      'displayName': 'Project Area',
                      'field': 'project_area',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      'displayName': 'Project Area Aggregate Size(Acres)',
                      'field': 'project_area_aggregate_size',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      'displayName': 'Project Area Density(%)',
                      'field': 'project_area_density',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      'displayName': 'Total # Of Targeted Farms',
                      'field': 'total_targeted_farms',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      'displayName': 'Total Acreage of Targeted Farms',
                      'field': 'total_acreage_targeted_farms',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      'displayName': 'Targeted Farm Soil Productivity(%)',
                      'field': 'targeted_farm_soil_productivity',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      'displayName': 'Total Estimated Cost For Targeted Farms Easement Purchase',
                      'field': 'total_estimated_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'project_area': ''
                  }, {
                      'project_area_aggregate_size': ''
                  }, {
                      'project_area_density': ''
                  }, {
                      'total_targeted_farms': ''
                  }, {
                      'total_acreage_targeted_farms': ''
                  }, {
                      'targeted_farm_soil_productivity': ''
                  }, {
                      'total_estimated_cost': ''
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Project Areas Totals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Total Project Area Acreage",
                      'field': 'total_project_area',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total # of Targeted Farms",
                      'field': 'total_targeted_farms',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Acreage of Targeted Farms",
                      'field': 'total_acreage_targeted_farms',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated Cost",
                      'field': 'total_estimated_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'total_project_area': ''
                  }, {
                      'total_targeted_farms': ''
                  }, {
                      'total_acreage_targeted_farms': ''
                  }, {
                      'total_estimated_cost': ''
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Preservation Goals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Target",
                      'field': 'target',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Acres",
                      'field': 'acres',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Number of farms",
                      'field': 'number_of_farms',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'target': ''
                  }, {
                      'acres': ''
                  }, {
                      'number_of_farms': ''
                  }]
              }]
          }, {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "County Policy Information:",
              "question_section_help_text": "If the answer is YES to the following and the amendment has been made since last year's submittal,please attach a copy of the adopted County Agricultural Development Board or Freeholder Board policy or resolution explaining the position of the county.A NO answer is acknowledgement that the county relies upon SADC policy or regulation.",
              "questions": [{
                  "id": "MEC1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Minimum Eligibilty Criteria:",
                  "question_text": "Does the county have a minimum eligibilty criteria or standards policy for solicitation and approval of applications for farmland preservation?",
                  "question_help_text": "See SADC regulation N.J.A.C 2:76-6.20",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "MEC1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "CRC1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "County Ranking Criteria:",
                  "question_text": "Does the county have a ranking criteria policy to prioritize farms for preservation funding?",
                  "question_help_text": "See SADC regulation N.J.A.C.2:76-6.16 & SADC Policy P-14E",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "CRC1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "ALH1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Agricultural Labour Housing:",
                  "question_text": "Does the county have a policy on agricultural labor housing for preserved forms?",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "ALH1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "HR1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "House Replacement:",
                  "question_text": "Does the county have a policy replacement of a residence on preserved farmland?",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"

                  }],
                  "dependent_question": [{
                      "dependent_on": "HR1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "RDSOA1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Residual Dwelling Site Opportunity Allocation:",
                  "question_text": "Does the county have a policy for the allocation of Residual Dwelling Site Opportunities?",
                  "question_help_text": "See SADC regulation N.J.A.C.2:76-6.17 and Policy P-28",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "RDSOA1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "ERDSO1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Exercising a Residual Dwelling Site Opportunity:",
                  "question_text": "Does the county have a policy for exercising Residual Dwelling Site Opportunity?",
                  "question_help_text": "See SADC regulation N.J.A.C.2:76-6.17 and Policy P-31",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "ERDSO1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "DOP1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Division of Premises:",
                  "question_text": "Does the county have a policy regarding the division of permanently preserved farmland?",
                  "question_help_text": "See SADC Policy P-30A",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "DOP1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "EX1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Exemptions:",
                  "question_text": "Does the county have a policy for the granting of severable and non-severable exceptions?",
                  "question_help_text": "See SADC Policy P-29A",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "EX1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": "radio",
                          "typeValue": "Yes"
                      }, {
                          "type": "radio",
                          "typeValue": "No"
                      }]
                  }]
              }, {
                  "id": "OP1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Other Policies:",
                  "question_text": "Does the county have other policies related to farmland preservation?",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"
                  }],
                  "dependent_question": [{
                      "dependent_on": "OP1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,please list and describe:",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [{
                          "type": 'radio',
                          "typeValue": 'Yes'
                      }, {
                          "type": 'radio',
                          "typeValue": 'No'
                      }]
                  }]

              }]
          }, {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "Funding Information:",
              "question_section_help_text": "",
              "questions": [{
                  "id": "funding",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "County Funding:",
                  "question_text": "Please check all that apply:",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "dependent_question": [{
                      "dependent_on": "funding",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "County dedicated open space/farmland preservation tax:",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "County dedicated open space/farmland preservation tax: ",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Annual revenue generated from dedicated tax: $",
                          "help_text2": "Annual tax revenue dedicated to farmland preservation: $"
                      }, {
                          "fieldname": "Repeated annual appropriations dedicated to farmland preservation:",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe:"
                      }, {
                          "fieldname": "Repeated Issuance of Bonded Indebtedness",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe:"

                      }, {
                          "fieldname": "Other funding sources:",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe:"
                      }]
                  }]

              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Municipal Funding:",
                  "question_text": "For each project",
                  "question_help_text": "Add additional rows as needed",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Municipality",
                      'field': 'municipality',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Tax Rate per $100",
                      'field': 'tax_rate',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Annual Revenue Generated",
                      'field': 'annual_revenue',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Annual Revenue Deducted to Farmland Preservation",
                      'field': 'annual_revenue_deducted',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Repeated Annual Appropriations",
                      'field': 'annual_appropriations',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Repeated Issuance of Bonded Indebtedness ",
                      'field': 'repeated_issuance',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Revenue from Others Sources",
                      'field': 'revenue',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'municipality': ''
                  }, {
                      'tax_rate': ''
                  }, {
                      'annual_revenue': ''
                  }, {
                      'annual_revenue_deducted': ''
                  }, {
                      'annual_appropriations': ''
                  }, {
                      'repeated_issuance': ''
                  }, {
                      'revenue': ''
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Municipal Funding Totals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Total Annual Revenue Generated",
                      'field': 'total_annual_revenue',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Annual Revenue Deducted to Farmland Preservation",
                      'field': 'total_annual_revenue_deducted',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Repeated Annual Appropriations ",
                      'field': 'total_repeated_annual_appropriations',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Issuance of Bonded Indebtedness",
                      'field': 'total_issuance',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Revenue from Others Sources",
                      'field': 'total_revenue',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'total_annual_revenue': ''
                  }, {
                      'total_annual_revenue_deducted': ''
                  }, {
                      'total_repeated_annual_appropriations': ''
                  }, {
                      'total_issuance': ''
                  }, {
                      'total_revenue': ''
                  }]

              }, {
                  "id": "CSR",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Cost Share Requirements:",
                  "question_text": "Does the county require cost share contribution from sources other than the state on development easement acquisitions?",
                  "question_help_text": "If YES,please attach a copy of the adopted CADB:",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"

                  }],
                  "dependent_question": [{
                      "dependent_on": "CSR",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true"
                  }]
              }, {
                  "id": "IPA",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Installment Purchase Agreements:",
                  "question_text_1": "Does the county permit the use of installment purchase agreements?",
                  "question_text_2":[{"q": "Does the county currently use installment purchase agreements?",
                   "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"

                  }]
                  }],
                  "question_help_text": "If the answer is YES to any of the following,please attach a copy of the adopted CADB policy or resolution explaining the county installment purchase program.If no policy has yet been adopted please attach a description of the program.",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [{
                      "type": "radio",
                      "typeValue": "Yes"
                  }, {
                      "type": "radio",
                      "typeValue": "No"

                  }],
                  "dependent_question": [{
                      "dependent_on": "IPA",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Installment Purchase Agreements are: (Please check all that apply)",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "Always required",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "Required on a case by case basis",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "Available on a voluntary basis",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }]
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Cost Projections Associated with One,Five and Ten Year Goals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Year",
                      'field': 'year',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Acquisition Goal(Acres)",
                      'field': 'acquisition_goal',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Projected Cost",
                      'field': 'total_projected_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Estimated Local Cost Share",
                      'field': 'estimated_local_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Estimated County Cost Share",
                      'field': 'estimated_county_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Estimated State Cost Share ",
                      'field': 'estimated_state_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Other Contributors",
                      'field': 'other_contributors',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'year': ''
                  }, {
                      'acquisition_goal': ''
                  }, {
                      'total_projected_cost': ''
                  }, {
                      'estimated_local_cost': ''
                  }, {
                      'estimated_county_cost': ''
                  }, {
                      'estimated_state_cost': ''
                  }, {
                      'other_contributors': ''
                  }]

              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Estimate of Easement Purchase Cost on All Targeted Farms:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Project Area Name",
                      'field': 'project_area_name',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Acres",
                      'field': 'acres',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Average Easement Price per Acre",
                      'field': 'average_easement_price',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated Project Cost",
                      'field': 'total_estimated_project_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated Muncipal Funding",
                      'field': 'total_estimated_muncipal_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated County Funding",
                      'field': 'total_estimated_county_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated State Funding ",
                      'field': 'total_estimated_state_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated Funding from Other Sources",
                      'field': 'total_estimated_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'project_area_name': ''
                  }, {
                      'acres': ''
                  }, {
                      'average_easement_price': ''
                  }, {
                      'total_estimated_project_cost': ''
                  }, {
                      'total_estimated_muncipal_funding': ''
                  }, {
                      'total_estimated_county_funding': ''
                  }, {
                      'total_estimated_state_funding': ''
                  }, {
                      'total_estimated_funding': ''
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Targeted Farm Totals",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Total Acreage",
                      'field': 'total_acreage',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated Cost for Targeted Farm Easement Purchase",
                      'field': 'total_estimated_cost',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated Muncipal Funding ",
                      'field': 'total_estimated_muncipal_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated County Funding",
                      'field': 'total_estimated_county_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated State Funding",
                      'field': 'total_estimated_state_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }, {
                      "name": "Total Estimated Funding from Other Sources",
                      'field': 'total_estimated_funding',
                      'cellTemplate': '<div ><input ng-model="MODEL_COL_FIELD"</div>'
                  }],
                  "tableData": [{
                      'total_estimated_cost': ''
                  }, {
                      'total_acreage': ''
                  }, {
                      'total_estimated_muncipal_funding': ''
                  }, {
                      'total_estimated_county_funding': ''
                  }, {
                      'total_estimated_state_funding': ''
                  }, {
                      'total_estimated_funding': ''
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "",
                  "question_text": "How was the cost of purchasing development easements on the targeted farms determined?",
                  "question_type": "checkList",
                  "checkList": [{
                      "fieldname": "Existing appraisal data",
                      "fieldtype": "checkbox",
                      "validator": "required"
                  }, {
                      "fieldname": "Appraisal of the entire project area",
                      "fieldtype": "checkbox",
                      "validator": "required"
                  }, {
                      "fieldname": "other",
                      "fieldtype": "checkbox",
                      "validator": "required"
                  }]
              }]
          }]
      };

      var tmpl = '<div ><input ng-model="MODEL_COL_FIELD"</div>';
      
      $scope.addRow = function(data){
        data.push({});
      };

      $scope.removeRow=function(data){
			data.splice(data,1);
		};



      $scope.projectAreaGridOptions = {
          data: $scope.entity.question_List[0].questions[2].tableData,
          columnDefs: $scope.entity.question_List[0].questions[2].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.projectAreaTotalGridOptions = {
          data: $scope.entity.question_List[0].questions[3].tableData,
          columnDefs: $scope.entity.question_List[0].questions[3].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.preservationGoalsGridOptions = {
          data: $scope.entity.question_List[0].questions[4].tableData,
          columnDefs: $scope.entity.question_List[0].questions[4].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.municipalFundingGridOptions = {
          data: $scope.entity.question_List[2].questions[1].tableData,
          columnDefs: $scope.entity.question_List[2].questions[1].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.municipalFundingTotalGridOptions = {
          data: $scope.entity.question_List[2].questions[2].tableData,
          columnDefs: $scope.entity.question_List[2].questions[2].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.costProjectionsGridOptions = {
          data: $scope.entity.question_List[2].questions[5].tableData,
          columnDefs: $scope.entity.question_List[2].questions[5].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.purchaseCostGridOptions = {
          data: $scope.entity.question_List[2].questions[6].tableData,
          columnDefs: $scope.entity.question_List[2].questions[6].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.farmTotalsGridOptions = {
          data: $scope.entity.question_List[2].questions[7].tableData,
          columnDefs: $scope.entity.question_List[2].questions[7].tableHeader,
          enableCellSelection: true,
          enableRowSelection: false,
          enableCellEdit: true
      };

      $scope.submitForm = function() {
          console.log($scope.entity);
      };
  }).directive("dynamicName", function($compile) {
      return {
          restrict: "A",
          terminal: true,
          priority: 1000,
          link: function(scope, element, attrs) {
              element.attr('name', scope.$eval(attrs.dynamicName));
              element.removeAttr("dynamic-name");
              $compile(element)(scope);
          }
      };
  }).factory('formatData', function() {
      return {
          formattingTableHeader: function(data) {
              angular.each(data, function(k, v) {

              });
              return data;
          }
      };
  });
