import { useState } from "react";
import { useProjects } from "../services/queries";


export default function Projects() {
const [page, setPage] = useState(1);

const {  data: projectsData, isPending, error, isError, isPlaceholderData, isFetching} = useProjects(page)

    return (
        <div>
            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message} </div>
            ) : (
                <div>
                    {projectsData?.data?.map((project) => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </div>
            )}

            <span>Current page: {page} </span> <br />
            <button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
                Previous page
            </button>

            <button onClick={() => {
                if (!isPlaceholderData && page < projectsData?.totalPages || 1) {
                    setPage((old) => old + 1)
                }
            }} disabled={page >= (projectsData?.totalPages || 1) || isPlaceholderData}>
                Next page
            </button> <br />
            {isFetching ? <span>Loading...</span> : null}
        </div>
    )
}