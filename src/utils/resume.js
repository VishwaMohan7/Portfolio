/**
 * Utility to download the latest resume directly from the Git repository.
 * Falls back to the local static resume if the Git request fails.
 */
export const downloadResumeFromGit = async () => {
  const gitUrl = 'https://raw.githubusercontent.com/VishwaMohan7/Portfolio/main/VISHWAMOHAN_S_N_Resume.pdf';
  const fallbackUrl = '/VISHWAMOHAN_S_N_Resume.pdf';
  const filename = 'VISHWAMOHAN_S_N_Resume.pdf';

  try {
    const response = await fetch(gitUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Error fetching resume from Git, falling back to local copy:', error);
    
    // Fallback: trigger download using the locally hosted file
    const link = document.createElement('a');
    link.href = fallbackUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
