/**
 * Dashboard data constants
 */

import { Application, Coordinator, TrainingProgram, Notification } from "@/types";

export const MOCK_APPLICATIONS: Application[] = [
  { id: 1, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 2, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 3, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 4, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 5, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 6, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 7, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 8, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
  { id: 9, name: "प्रवीण कुमार", fatherName: "अनुराग  वैशाली गर्ग", status: "निरीक्षण" },
];

export const MOCK_COORDINATORS: Coordinator[] = [
  { name: "Ramesh Kumar", school: "Bal Bharti School", color: "bg-pink-300" },
  { name: "Shyam Soni", school: "Bal Bharti School", color: "bg-slate-700" },
  { name: "Abhishek", school: "Bal Bharti School", color: "bg-amber-200" },
  { name: "Ramesh Kumar", school: "Bal Bharti School", color: "bg-pink-400" },
  { name: "Shyam Soni", school: "Bal Bharti School", color: "bg-slate-700" },
  { name: "Abhishek", school: "Bal Bharti School", color: "bg-amber-200" },
  { name: "Shyam Soni", school: "Bal Bharti School", color: "bg-slate-700" },
  { name: "Abhishek", school: "Bal Bharti School", color: "bg-amber-200" },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    title: "सिलाई कार्य",
    description: "कोलेजों में अल्पकालिक सॉफ्ट स्किल और जीवन कौशल प्रशिक्षण दिया जाएगा",
    variant: "blue",
  },
  {
    title: "बिजली कार्य",
    description: "व्यवसाय में उच्च शिक्षा प्राप्त युवाओं को जीवन कौशल प्रशिक्षण दिया जाएगा",
    variant: "pink",
  },
];

export const NOTIFICATIONS: Notification[] = [
  {
    title: "बाल भारती स्कूल",
    description: "Ble lorem text Ble lorem text Ble lorem text blue lorem text recruitment alternatives jobs.recruitment@bajajgroup.com",
    bgColor: "bg-blue-100",
    iconType: "users",
  },
  {
    title: "दयोदय कैंद",
    description: "Ble lorem text blue lorem text higher educational recruitment recruitment alternatives@bajajgroup.com",
    bgColor: "bg-pink-100",
    iconType: "school",
  },
  {
    title: "संस्कार शाला",
    description: "Ble lorem text blue lorem text ble lorem text recruitment alternatives jobs.recruitment@bajaj",
    bgColor: "bg-blue-100",
    iconType: "file",
  },
];
