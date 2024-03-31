import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { CardContent, Card, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import Topbar from "@/components/FrontUIComponent/container/header/Topbar"
import Topnavbar from "@/components/FrontUIComponent/container/header/Topnavbar"
import Footer from "@/components/FrontUIComponent/container/footer/Footer"

export default function Jobs() {
    return (
        <>
            <Topnavbar />
            <Topbar />
            <div className="grid md:grid-cols-[250px_1fr] p-4 gap-4">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="space-y-1.5">
                            <div className="flex items-center space-x-2">
                                <BriefcaseIcon className="h-6 w-6" />
                                <h1 className="text-lg font-bold tracking-tight">Job postings</h1>
                            </div>
                            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                                Here are the available job postings at the university.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="space-y-0.5">
                                <Label htmlFor="search">Search</Label>
                                <Input id="search" placeholder="Search for job titles or keywords" />
                            </div>
                            <div className="space-y-0.5">
                                <Label>Department</Label>
                                <div className="relative">
                                    <label for="department"> <div>
                                        <div>
                                            <Button
                                                aria-expanded="true"
                                                aria-haspopup="listbox"
                                                className="w-full p-0 m-0  text-left"
                                                id="job-type"
                                                variant="select"
                                            >
                                                Select a Department:
                                            </Button>
                                        </div>
                                    </div></label>

                                    <select id="department">
                                        <option value="All Department">All Department</option>
                                        <option value="Mathematics" >Mathematics</option>
                                        <option value="Computer Scinence">Computer Scinence</option>
                                        <option value="Urdu" >Urdu</option>
                                        <option value="Bio Tech" >Bio Tech</option>
                                    </select>
                                    <div className="min-w-[100%] mt-1 rounded-b-md">

                                    </div>
                                </div>
                            </div>
                            <div className="space-y-0.5">
                                <Label>Location</Label>
                                <div className="relative">
                                    <label for="jobs"> <div>
                                        <div>
                                            <Button
                                                aria-expanded="true"
                                                aria-haspopup="listbox"
                                                className="w-full p-0 m-0  text-left"
                                                id="job-type"
                                                variant="select"
                                            >
                                                Choose a Location:
                                            </Button>
                                        </div>
                                    </div></label>

                                    <select id="jobs">
                                        <option value="All job types">All job types</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Internship" >Internship</option>
                                        <option value="Contract" >Contract</option>
                                    </select>
                                    <div className="min-w-[100%] mt-1 rounded-b-md">

                                    </div>
                                </div>
                            </div>
                            <div className="space-y-0.5">
                                <Label>Job type</Label>
                                <div className="relative">
                                    <label for="jobs"> <div>
                                        <div>
                                            <Button
                                                aria-expanded="true"
                                                aria-haspopup="listbox"
                                                className="w-full p-0 m-0  text-left"
                                                id="job-type"
                                                variant="select"
                                            >
                                                Select a job type:
                                            </Button>
                                        </div>
                                    </div></label>

                                    <select id="jobs">
                                        <option value="All job types">All job types</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Internship" >Internship</option>
                                        <option value="Contract" >Contract</option>
                                    </select>
                                    <div className="min-w-[100%] mt-1 rounded-b-md">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <Card>
                            <Link className="absolute inset-0 z-10" href="#" />
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <h2 className="text-lg font-semibold">Software Engineer</h2>
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Information Technology</p>
                                </div>
                                <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                            </CardContent>
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Location</p>
                                    <h2 className="text-sm font-semibold">San Francisco</h2>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time className="text-sm font-semibold">Open until filled</time>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <Link className="absolute inset-0 z-10" href="#" />
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <h2 className="text-lg font-semibold">Product Designer</h2>
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Design</p>
                                </div>
                                <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                            </CardContent>
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Location</p>
                                    <h2 className="text-sm font-semibold">New York</h2>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time className="text-sm font-semibold">Open until filled</time>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <Link className="absolute inset-0 z-10" href="#" />
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <h2 className="text-lg font-semibold">Marketing Manager</h2>
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Marketing</p>
                                </div>
                                <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                            </CardContent>
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Location</p>
                                    <h2 className="text-sm font-semibold">Los Angeles</h2>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time className="text-sm font-semibold">Open until filled</time>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <Link className="absolute inset-0 z-10" href="#" />
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <h2 className="text-lg font-semibold">Research Assistant</h2>
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Academics</p>
                                </div>
                                <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                            </CardContent>
                            <CardContent className="flex items-center justify-between">
                                <div className="space-y-1.5">
                                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Location</p>
                                    <h2 className="text-sm font-semibold">Chicago</h2>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time className="text-sm font-semibold">Open until filled</time>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="space-y-4">
                    <Card>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold">Software Engineer</h3>
                                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Information Technology</p>
                            </div>
                            <div className="grid grid-cols-2 items-start">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <MapIcon className="h-4 w-4 text-gray-500" />
                                        <p className="text-sm font-semibold">Location</p>
                                    </div>
                                    <p>New York</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time>Open until filled</time>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className=" border p-2 bg-[#7A1CCB] text-[#fff] text-sm font-semibold"
                                href="#"
                                style={{
                                    lineHeight: "1.75",
                                }}
                            >
                                View details
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold">Product Designer</h3>
                                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Design</p>
                            </div>
                            <div className="grid grid-cols-2 items-start">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <MapIcon className="h-4 w-4 text-gray-500" />
                                        <p className="text-sm font-semibold">Location</p>
                                    </div>
                                    <p>San Francisco</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time>Open until filled</time>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className=" border p-2 bg-[#7A1CCB] text-[#fff] text-sm font-semibold"
                                href="#"
                                style={{
                                    lineHeight: "1.75",
                                }}
                            >
                                View details
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold">Marketing Manager</h3>
                                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Marketing</p>
                            </div>
                            <div className="grid grid-cols-2 items-start">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <MapIcon className="h-4 w-4 text-gray-500" />
                                        <p className="text-sm font-semibold">Location</p>
                                    </div>
                                    <p>Los Angeles</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time>Open until filled</time>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className=" border p-2 bg-[#7A1CCB] text-[#fff] text-sm font-semibold"
                                href="#"
                                style={{
                                    lineHeight: "1.75",
                                }}
                            >
                                View details
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold">Research Assistant</h3>
                                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Academics</p>
                            </div>
                            <div className="grid grid-cols-2 items-start">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <MapIcon className="h-4 w-4 text-gray-500" />
                                        <p className="text-sm font-semibold">Location</p>
                                    </div>
                                    <p>Chicago</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                                    <time>Open until filled</time>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className=" border p-2 bg-[#7A1CCB] text-[#fff] text-sm font-semibold"
                                href="#"
                                style={{
                                    lineHeight: "1.75",
                                }}
                            >
                                View details
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Footer/>
        </>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}


function CalendarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    )
}


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function MapIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" x2="9" y1="3" y2="18" />
            <line x1="15" x2="15" y1="6" y2="21" />
        </svg>
    )
}
