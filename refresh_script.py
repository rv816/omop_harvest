

from omop_harvest import models

refreshlist = ['Gender', 'Race','Ethnicity', 'ConditionConcept', 'ConditionType', 'DrugConcept', 'DrugType', 'DrugCondition', 'ObservationConcept','ObservationType', 'ObservationCondition', 'ObservationValue'] 

for x in refreshlist:
	getattr(models, x).view.refresh()