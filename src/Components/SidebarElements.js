

const sidebarElements = () => {

    const sidebarElements = [
        {
            name: "Web Development",
            id: 1,
            isActive: false,
            children: [
                {
                    childName: "Backend",
                    id: 11,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "backendCourses" },
                        { grandChildName: "Projects", pathName: `backendProjects` },
                        { grandChildName: "Resources", pathName: "backendResources" }
                    ]
                },
                {
                    childName: "Frontend",
                    id: 12,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "frontendCourses" },
                        { grandChildName: "Projects", pathName: "frontendProjects" },
                        { grandChildName: "Resources", pathName: "frontendResources" }
                    ]
                }
            ]
        },
        {
            name: "Mobile Devolpment",
            id: 2,
            isActive: false,
            children: [
                {
                    childName: "Native",
                    id: 21,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "nativeCourses" },
                        { grandChildName: "Projects", pathName: "nativeProjects" },
                        { grandChildName: "Resorses", pathName: "nativeResorses" }
                    ]
                },
                {
                    childName: "Cross-Platform",
                    id: 22,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "crossPlatformCourses" },
                        { grandChildName: "Projects", pathName: "crossPlatformProjects" },
                        { grandChildName: "Resorses", pathName: "crossPlatformResorses" }
                    ]
                }
            ]
        },
        {
            name: "Syber Security",
            id: 3,
            isActive: false,
            children: [
                {
                    childName: "Network Security",
                    id: 31,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "networkSecurityCourses" }, 
                        { grandChildName: "Recourses", pathName: "networkSecurityRecourses" }
                    ]
                },
                {
                    childName: "Application Security",
                    id: 32,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "applicationSecurityCourses" },
                        { grandChildName: "Projects", pathName: "applicationSecurityProjects" },
                        { grandChildName: "Resorses", pathName: "applicationSecurityResorses" }
                    ]
                },
                {
                    childName: "Information Security",
                    id: 33,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "informationSecurityCourses" },
                        { grandChildName: "Projects", pathName: "informationSecurityProjects" },
                        { grandChildName: "Resorses", pathName: "informationSecurityResorses" }
                    ]
                }
            ]
        },
        {
            name: "AI",
            id: 4,
            isActive: false,
            children: [
                {
                    childName: "Machine Learning (ML)",
                    id: 41,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "/prog/test" },
                        { grandChildName: "Projects", pathName: "/" },
                        { grandChildName: "Resorses", pathName: "/" }
                    ]
                },
                {
                    childName: "Deep Learning",
                    id: 42,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "/" },
                        { grandChildName: "Projects", pathName: "/" },
                        { grandChildName: "Resorses", pathName: "/" }
                    ]
                },
                {
                    childName: "Natural Language Processing (NLP)",
                    id: 42,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "/" },
                        { grandChildName: "Projects", pathName: "/" },
                        { grandChildName: "Resorses", pathName: "/" }
                    ]
                },
                {
                    childName: "Computer Vision",
                    id: 42,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "/" },
                        { grandChildName: "Projects", pathName: "/" },
                        { grandChildName: "Resorses", pathName: "/" }
                    ]
                },
                {
                    childName: "Robotics",
                    id: 42,
                    isActive: false,
                    grandChildren: [
                        { grandChildName: "Courses", pathName: "/" },
                        { grandChildName: "Projects", pathName: "/" },
                        { grandChildName: "Resorses", pathName: "/" }
                    ]
                },
            ]
        },
    ]

    return sidebarElements
}

export default sidebarElements

/**
 https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv
 https://i.ytimg.com/vi/GM6dQBmc-Xg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC7bmiWM5DxiYEk-iTeXzBPdnWbZg
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZYLrGeI7a9xSp_0NpFLOfZ3k5tIVCUUXXg&s
 

https://www.youtube.com/watch?v=SpwzRDUQ1GI&pp=ygUWdHlwZXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDVaOD5SG4Bpbio9PHhP8djw4pUhrDebphA&s
 https://avatars.githubusercontent.com/u/6244647?v=4
 */