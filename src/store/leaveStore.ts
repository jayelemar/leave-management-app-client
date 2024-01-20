import { create } from "zustand";

type Leave = {
    name: string,
    leaveType: 
      | 'Annual Leave'
      | 'Solo Parents' 
      | 'Volunteer Leave' 
      | 'Paternity' 
      | 'Violence Act' 
      | 'Adoption Leave' 
      | 'Sabbatical Leave' 
      | 'Carry Forward Leave' 
      | 'Bereavement'
    ,
    status:  'pending' | 'approved' |'rejected' ,
    startDate: Date,
    endDate: Date,
    reason: string,
    contactAddress: string, 
    contactNumber:  string,
    createdAt: Date,
    modifiedAt: Date,
}

type LeaveStore = {
  leave: Leave | null,
  leaves: Leave[]
}

export const useLeaveStore = create<LeaveStore>(() => ({
  //initial state
  leave: null,
  leaves: []
}))