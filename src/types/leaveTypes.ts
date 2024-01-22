

export interface LeaveProps {
  name: string,
  leaveType: string,
  status: string,
  startDate: Date,
  endDate: Date,
  reason: string,
  contactAddress: string, 
  contactNumber:  string,
  createdAt: Date,
  modifiedAt: Date,
}

export interface LeaveFormProps {
  name: string,
  leaveType: string,
  startDate: Date,
  endDate: Date,
  reason: string,
  contactAddress: string, 
  contactNumber:  string,
}